import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o27f2007pt01xm8rccgbba/master',
  cache: new InMemoryCache()
})