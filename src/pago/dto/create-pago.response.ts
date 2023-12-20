import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreatePagoResponseDto {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field()
  token: string;

  @Field()
  url: string;
}
