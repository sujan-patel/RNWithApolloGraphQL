import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
  } from '@apollo/client';

  export default new ApolloClient({
    link: new HttpLink({uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'}),
    cache: new InMemoryCache(),
    defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
  });