import { Field, ObjectType } from '@nestjs/graphql';
import { Producto } from 'src/producto/entities/producto.entity';
import { Lineaproductoi } from '../entities/lineaproductoi.entity';

@ObjectType()
export class getLineaProductoByIdCarritoResponse {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field(() => [Lineaproductoi])
  lp?: Lineaproductoi[];
}
