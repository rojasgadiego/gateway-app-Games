import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class deleteLineaProductoRequest {
  @Field()
  id: number;
}
