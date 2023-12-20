import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePagoInput {
  @Field()
  amount: number;
}
