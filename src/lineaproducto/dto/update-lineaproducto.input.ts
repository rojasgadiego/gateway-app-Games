import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class updateLineaProductoRequest {
  @Field()
  id: number;

  @Field()
  cant: number;
}
