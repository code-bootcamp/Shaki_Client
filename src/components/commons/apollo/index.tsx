import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IProps) {
  const uploadLink = createUploadLink({
    uri: "https://shaki-back.shop/graphql",
    // credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
    credentials: "include",
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
