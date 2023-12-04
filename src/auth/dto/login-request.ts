import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginRequestDto {
  @Field()
  email: string;

  @Field()
  password: string;
}
