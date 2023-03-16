import React from 'react';
import { Text, FlatList, View } from 'react-native';
import {
  useQuery,
} from '@apollo/client';

import { AccordionItem } from './Components/AccordionItem';
import { Header } from './Components/Header';
import { AllFilms } from '../../Query';
import styles from './Style';
import Loader from '../../Library/Loader';

export const Films = () => {
  const { loading, error, data } = useQuery(AllFilms);
  
  if (loading) {
    return <Loader />;
  }
    if (error) {
      return <Text>Error :(</Text>;
    }
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={data.allFilms.films}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <AccordionItem film={item} />}
          keyExtractor={chapter => chapter.id.toString()}
        />
      </View>
    );
  };
  