import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql";
const AppGQLClient = (props) => {
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  );
};
export default AppGQLClient;