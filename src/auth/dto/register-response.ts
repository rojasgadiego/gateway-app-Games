import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RegisterResponseDto {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field()
  message: string;
}
