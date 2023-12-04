import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Lineaproducto {
  @Field(() => Int)
  id: number;

  @Field()
  idProducto: number;

  @Field()
  cant: number;

  @Field()
  subprice: number;

  @Field()
  idcarrito: number;
}
