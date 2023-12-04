import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class vaciarCarritoRequest {
  @Field()
  id: number;
}
