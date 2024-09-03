import { Injectable, Inject } from '@nestjs/common';
import { AUTH_SERVICE_NAME, AuthServiceClient } from '../types/auth.pb';
import { firstValueFrom } from 'rxjs';
import { ClientGrpc } from '@nestjs/microservices';
import { RegisterRequestDto } from '../dto/register-request';
import { LoginRequestDto } from '../dto/login-request';
import { ValidateInputDto } from '../dto/validate-input';
import { FindUserRequestDto } from '../dto/find-user.input';

@Injectable()
export class AuthService {
  private svc: AuthServiceClient;

  @Inject(AUTH_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService(AUTH_SERVICE_NAME);
  }

  async login({ email, password }: LoginRequestDto) {
    const response = await firstValueFrom(this.svc.login({ email, password }));
    if (response.status === 404) {
      return {
        token: 'null',
        status: response.status,
        error: response.error[0],
        idUser: 0,
      };
    }
    return {
      token: response.token,
      status: response.status,
      error: 'null',
      idUser: response.idUser,
    };
  }

  async register({ nombre, email, password }: RegisterRequestDto) {
    const response = await firstValueFrom(
      this.svc.register({ nombre, email, password }),
    );
    if (response.status === 409) {
      return {
        status: response.status,
        error: response.error[0],
        message: 'Usuario no registrado',
      };
    }
    if (response.status === 400) {
      return {
        status: response.status,
        error: response.error[0],
        message: 'Usuario no registrado',
      };
    }
    return {
      status: response.status,
      error: 'null',
      message: 'Usuario registrado',
    };
  }

  public async validate({ token }: ValidateInputDto) {
    return firstValueFrom(this.svc.validate({ token }));
  }

  public async findUserById({ id }: FindUserRequestDto) {
    const response = await firstValueFrom(this.svc.findUserById({ id }));
    if (response.status === 409) {
      return {
        status: response.status,
        error: response.error[0],
        user: null,
      };
    }
    return {
      status: response.status,
      error: 'null',
      user: response.user,
    };
  }
}
