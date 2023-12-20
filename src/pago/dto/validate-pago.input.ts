import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ValidateTransaccionInput {
  @Field()
  token: string;
}
