import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Usuario {
  @Field(() => Int)
  id: number;

  @Field()
  name?: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
