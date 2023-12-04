import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterRequestDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
