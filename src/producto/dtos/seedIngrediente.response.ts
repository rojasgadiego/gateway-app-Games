import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SeedIngredienteResponse {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field()
  message: string;
}
