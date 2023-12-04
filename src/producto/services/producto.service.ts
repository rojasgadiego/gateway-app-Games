import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import {
  PRODUCTOS_SERVICE_NAME,
  ProductosServiceClient,
} from '../types/producto.pb';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductoService {
  private svc: ProductosServiceClient;

  @Inject(PRODUCTOS_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService(PRODUCTOS_SERVICE_NAME);
  }

  async getProductos() {
    const productos = (await firstValueFrom(this.svc.getProductos({}))).data;
    return {
      status: HttpStatus.OK,
      error: '',
      data: productos,
    };
  }
}
