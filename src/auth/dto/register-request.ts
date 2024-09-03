import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterRequestDto {
  @Field()
  nombre: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
