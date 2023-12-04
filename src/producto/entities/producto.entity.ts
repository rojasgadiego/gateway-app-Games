import { Field, ObjectType } from '@nestjs/graphql';
import { Ingrediente } from './ingrediente.entity';

@ObjectType()
export class Producto {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  rank?: number;

  @Field()
  stock: number;

  @Field()
  state: string;

  @Field()
  image: string;

  @Field(() => [Ingrediente])
  ingredients: Ingrediente[];
}
