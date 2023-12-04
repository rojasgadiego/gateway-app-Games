import { Module } from '@nestjs/common';
import { CarritoService } from './services/carrito.service';
import { CarritoResolver } from './resolvers/carrito.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CARRITO_PACKAGE_NAME, CARRITO_SERVICE_NAME } from './types/carrito.pb';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: CARRITO_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:3002',
          package: CARRITO_PACKAGE_NAME,
          protoPath: join(__dirname, 'protos/carrito.proto'),
        },
      },
    ]),
  ],
  providers: [CarritoResolver, CarritoService],
})
export class CarritoModule {}
