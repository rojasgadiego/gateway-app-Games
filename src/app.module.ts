import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { ProductoModule } from './producto/producto.module';
import { CarritoModule } from './carrito/carrito.module';
import { LineaproductoModule } from './lineaproducto/lineaproducto.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AuthModule,
    ProductoModule,
    CarritoModule,
    LineaproductoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
