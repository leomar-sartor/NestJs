/* eslint-disable prettier/prettier */
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class TesteInput{
    @Field()
    campoUm: string;
    @Field()
    campoDois: string;
}