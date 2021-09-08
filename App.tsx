/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, FlatList, Pressable} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  HttpLink,
} from '@apollo/client';
import styles from './styles';

const client = new ApolloClient({
  link: new HttpLink({uri: 'https://api.graphql.guide/graphql'}),
  cache: new InMemoryCache(),
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});
const CHAPTERS_QUERY = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`;
const ChapterItem = ({chapter, onPress}) => {
  const {number, title} = chapter;
  let header, subheader;

  if (number) {
    header = `Chapter ${number}`;
    subheader = title;
  } else {
    header = title;
  }
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.header}>{header}</Text>
      {subheader && <Text style={styles.subheader}>{subheader}</Text>}
    </Pressable>
  );
};

const HomeScreen = () => {
  const {loading, error, data} = useQuery(CHAPTERS_QUERY);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error :(</Text>;
  }
  return (
    <FlatList
      data={data.chapters}
      renderItem={({item}) => <ChapterItem chapter={item} onPress={() => {}} />}
      keyExtractor={chapter => chapter.id.toString()}
    />
  );
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <HomeScreen />
    </ApolloProvider>
  );
};
export default App;
