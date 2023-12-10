import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindUserRequestDto {
  @Field()
  id: number;
}
