import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class updateCarritoInput {
  @Field()
  id: number;

  @Field()
  state: string;
}
