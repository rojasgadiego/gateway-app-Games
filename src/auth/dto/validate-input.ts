import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ValidateInputDto {
  @Field()
  token: string;
}
