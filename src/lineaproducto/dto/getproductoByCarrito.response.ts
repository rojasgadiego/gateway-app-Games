import { Field, ObjectType } from '@nestjs/graphql';
import { Producto } from 'src/producto/entities/producto.entity';

@ObjectType()
export class getProductoByIdCarritoResponse {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field(() => [Producto])
  productos?: Producto[];
}
