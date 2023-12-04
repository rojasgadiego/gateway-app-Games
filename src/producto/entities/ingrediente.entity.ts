import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Ingrediente {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  stock: number;

  @Field()
  state: string;
}
