import { Module } from '@nestjs/common';
import { ProductoService } from './services/producto.service';
import { ProductoResolver } from './resolvers/producto.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  PRODUCTOS_PACKAGE_NAME,
  PRODUCTOS_SERVICE_NAME,
} from './types/producto.pb';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCTOS_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:3001',
          package: PRODUCTOS_PACKAGE_NAME,
          protoPath: join(__dirname, 'protos/producto.proto'),
        },
      },
    ]),
  ],
  providers: [ProductoResolver, ProductoService],
})
export class ProductoModule {}
