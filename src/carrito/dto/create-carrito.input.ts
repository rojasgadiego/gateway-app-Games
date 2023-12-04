import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCarritoInput {
  @Field()
  idUser: number;
}
