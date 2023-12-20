import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ValidateTransaccionResponseDto {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field()
  vci: string;

  @Field()
  statustrx: string;

  @Field()
  responseCode: number;
}
