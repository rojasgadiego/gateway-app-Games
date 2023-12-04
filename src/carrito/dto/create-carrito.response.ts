import { Field, ObjectType } from '@nestjs/graphql';
import { Carrito } from '../entities/carrito.entity';

@ObjectType()
export class CreateCarritoResponseDto {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field()
  message: string;

  @Field()
  idCarrito: number;
}
