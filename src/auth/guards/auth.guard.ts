import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from '../services/auth.service';
import { ValidateResponse } from '../types/auth.pb';

@Injectable()
export class AuthGuard implements CanActivate {
  @Inject(AuthService)
  public readonly service: AuthService;

  public async canActivate(ctx: ExecutionContext): Promise<boolean> | never {
    const req: Request = ctx.switchToHttp().getRequest();
    console.log(req);
    const authorization: string = req.headers['authorization'];
    if (!authorization) {
      throw new UnauthorizedException();
    }
    const bearer: string[] = authorization.split(' ');
    if (!bearer || bearer.length < 2) {
      throw new UnauthorizedException();
    }
    const token: string = bearer[1];
    const { status, userId }: ValidateResponse = await this.service.validate({
      token,
    });
    if (status !== HttpStatus.OK) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
