import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class vaciarCarritoResponse {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field()
  Empty: boolean;
}
