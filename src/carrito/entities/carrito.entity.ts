import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Carrito {
  @Field(() => Int)
  id: number;

  @Field()
  createdAt: string;

  @Field()
  idUser: number;

  @Field()
  state: string;
}
