import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLineaProductoInput {
  @Field()
  idcarrito: number;
  @Field()
  idProducto: number;
  @Field()
  cant: number;
  @Field()
  subprice: number;
}
