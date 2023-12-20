import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class updateLineaProductoResponse {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field()
  update: boolean;
}
