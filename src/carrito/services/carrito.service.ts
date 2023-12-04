import { Inject, Injectable } from '@nestjs/common';
import {
  CARRITO_SERVICE_NAME,
  CarritoServiceClient,
} from '../types/carrito.pb';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateCarritoInput } from '../dto/create-carrito.input';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CarritoService {
  private svc: CarritoServiceClient;

  @Inject(CARRITO_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService(CARRITO_SERVICE_NAME);
  }

  async createCarrito(createCarrito: CreateCarritoInput) {
    const response = await firstValueFrom(
      this.svc.createCarrito(createCarrito),
    );
    if (response.status === 409) {
      return {
        status: response.status,
        error: response.error[0],
        message: 'not created',
        idCarrito: 0,
      };
    }
    return {
      status: response.status,
      error: '',
      message: 'Carrito Creado',
      idCarrito: response.carrito.id,
    };
  }
}
