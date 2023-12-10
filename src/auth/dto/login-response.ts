import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginResponseDto {
  @Field()
  status: number;

  @Field()
  token: string | null;

  @Field()
  error: string | null;

  @Field()
  idUser: number;
}
