import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class deleteLineaProductoResponse {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field()
  deleted: boolean;
}