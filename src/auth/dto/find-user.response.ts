import { Field, ObjectType } from '@nestjs/graphql';
import { Usuario } from '../entities/usuario.entity';

@ObjectType()
export class FindUserResponseDto {
  @Field()
  status: number;

  @Field()
  error: string | null;

  @Field({ nullable: true })
  user?: Usuario | null;
}
