import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Usuario {
  @Field(() => String)
  id: string;

  @Field()
  nombre?: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
