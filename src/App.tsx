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
import {Text, Pressable} from 'react-native';
import {
  ApolloProvider,
} from '@apollo/client';
import client from './ApolloClient';
import { HomeScreen } from './components/HomeScreen';


const App = () => {
  return (
    <ApolloProvider client={client}>
      <HomeScreen />
    </ApolloProvider>
  );
};
export default App;
