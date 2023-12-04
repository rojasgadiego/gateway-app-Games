import { Field, ObjectType } from '@nestjs/graphql';
import { Producto } from '../entities/producto.entity';

@ObjectType()
export class SeedProductResponse {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field()
  message: string;
}
