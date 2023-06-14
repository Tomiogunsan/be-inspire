import { ApolloCache, DefaultContext, MutationFunctionOptions } from "@apollo/client";

export type LoginProps = {
  email: string;
  password: string
}

export type RegisterProps = {
    email:string;
    name: string;
    password: string;
}

export type onSubmitProps = {
    
}