
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import client from './src/ApolloClient';

import { Films } from './src/Screens/Films/Films';
import { FilmDetails } from './src/Screens/FilmDetails/FilmDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name="Films"
            component={Films}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="FilmDetails"
            component={FilmDetails}
            options={{
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: "black"
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};
export default App;
