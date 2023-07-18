import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
//import { AppService } from './app.service';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TesteResolver } from './graphql/resolvers/teste.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      // debug: false,
      // playground: true,
    }),
  ],
  // controllers: [AppController],
  //providers: [AppService],
  providers: [TesteResolver],
})
export class AppModule {}
