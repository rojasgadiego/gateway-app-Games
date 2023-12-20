import { Module } from '@nestjs/common';
import { PagoService } from './service/pago.service';
import { PagoResolver } from './resolver/pago.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PAGO_PACKAGE_NAME, PAGO_SERVICE_NAME } from './types/pago.pb';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PAGO_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:3020',
          package: PAGO_PACKAGE_NAME,
          protoPath: join(__dirname, 'proto/pago.proto'),
        },
      },
    ]),
  ],
  providers: [PagoResolver, PagoService],
})
export class PagoModule {}
