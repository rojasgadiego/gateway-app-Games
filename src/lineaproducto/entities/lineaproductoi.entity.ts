import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Producto } from 'src/producto/entities/producto.entity';

@ObjectType()
export class Lineaproductoi {
  @Field(() => Int)
  id: number;

  @Field()
  producto: Producto;

  @Field()
  cant: number;

  @Field()
  subprice: number;

  @Field()
  idcarrito: number;
}
