import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateLineaProductoResponseDto {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field()
  message: string;
}
