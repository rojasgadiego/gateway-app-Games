import { Inject, Injectable } from '@nestjs/common';
import { PAGO_SERVICE_NAME, PagoServiceClient } from '../types/pago.pb';
import { ClientGrpc } from '@nestjs/microservices';
import { CreatePagoInput } from '../dto/create-pago.input';
import { firstValueFrom } from 'rxjs';
import { url } from 'inspector';

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
  }
}
