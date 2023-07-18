/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TesteArgs } from '../args/teste.args';
import { TesteSchema } from '../schemasorobjects/teste.schema';

@Resolver('Teste')
export class TesteResolver {
  @Query(() => String,{
    description: 'Tentando buscar algo'
  })
  testes() {
    return 'Teste da poha';
  }

  @Mutation(() => TesteSchema, {
    description: 'Tentando criar algo'
  })
  createTeste(@Args()args: TesteArgs) {
    return args.data;
  }
}
