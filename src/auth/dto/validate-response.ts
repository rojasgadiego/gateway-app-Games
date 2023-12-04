import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ValidateResponseDto {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field()
  userId: number;
}
