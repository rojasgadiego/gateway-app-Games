import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class updateCarritoResponse {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field()
  update: boolean;
}
