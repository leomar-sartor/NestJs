/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TesteSchema {
  @Field()
  campoUm: string;
  @Field()
  campoDois: string;
}
