import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ValidateInputDto {
  @Field()
  token: string;
}
