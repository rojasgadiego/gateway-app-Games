import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ValidateResponseDto {
  @Field()
  status: number;

  @Field({ nullable: true })
  error: string | null;

  @Field({ nullable: true })
  userId: string | null;
}
