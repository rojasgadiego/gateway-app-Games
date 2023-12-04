import { Field, ObjectType } from '@nestjs/graphql';
import { Producto } from '../entities/producto.entity';

@ObjectType()
export class ProductosResponseDto {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field(() => [Producto])
  data: Producto[];
}
