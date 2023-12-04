import { Module } from '@nestjs/common';
import { LineaproductoService } from './services/lineaproducto.service';
import { LineaproductoResolver } from './resolvers/lineaproducto.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  LINEAPRODUCTO_PACKAGE_NAME,
  LINEAPRODUCTO_SERVICE_NAME,
} from './types/lineaproducto.pb';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: LINEAPRODUCTO_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:3003',
          package: LINEAPRODUCTO_PACKAGE_NAME,
          protoPath: join(__dirname, 'protos/lineaproducto.proto'),
        },
      },
    ]),
  ],
  providers: [LineaproductoResolver, LineaproductoService],
})
export class LineaproductoModule {}
