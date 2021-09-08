import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
  } from '@apollo/client';

  export default new ApolloClient({
    link: new HttpLink({uri: 'https://api.graphql.guide/graphql'}),
    cache: new InMemoryCache(),
    defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
  });