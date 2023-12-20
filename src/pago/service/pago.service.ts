import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PAGO_SERVICE_NAME, PagoServiceClient } from '../types/pago.pb';
import { ClientGrpc } from '@nestjs/microservices';
import { CreatePagoInput } from '../dto/create-pago.input';
import { firstValueFrom } from 'rxjs';
import { ValidateTransaccionInput } from '../dto/validate-pago.input';

@Injectable()
export class PagoService {
  private svc: PagoServiceClient;

  @Inject(PAGO_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService(PAGO_SERVICE_NAME);
  }

  async createPago(createPago: CreatePagoInput) {
    const response = await firstValueFrom(this.svc.createPago(createPago));
    if (response.status === 200) {
      return {
        status: response.status,
        error: '',
        token: response.token,
        url: response.url,
      };
    }
    return {
      status: HttpStatus.BAD_REQUEST,
      error: response.error,
      token: '',
      url: '',
    };
  }

  async validateTransaccion(
    validateTransaccionInput: ValidateTransaccionInput,
  ) {
    const response = await firstValueFrom(
      this.svc.validateTransaccion(validateTransaccionInput),
    );
    if (response.status === 200) {
      return {
        status: response.status,
        error: '',
        vci: response.vci,
        statustrx: response.statustrx,
        responseCode: response.responseCode,
      };
    }
    return {
      status: response.status,
      error: response.error[0],
      vci: response.vci,
      statustrx: response.statustrx,
      responseCode: response.responseCode,
    };
  }
}
