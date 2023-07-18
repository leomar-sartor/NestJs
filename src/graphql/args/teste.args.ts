/* eslint-disable prettier/prettier */
import { ArgsType, Field } from '@nestjs/graphql';
import { TesteInput } from '../inputs/teste.input';

@ArgsType()
export class TesteArgs {
    @Field()
    data: TesteInput
}
