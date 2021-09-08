import React from 'react';
import { Text, FlatList } from 'react-native';
import {
  useQuery,
} from '@apollo/client';
import { GET_CHAPTERS } from '../query';
import { ChapterItem } from './ChapterItem';

export const HomeScreen = () => {
    const {loading, error, data} = useQuery(GET_CHAPTERS);
  
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
  