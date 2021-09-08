import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../../styles';


export const ChapterItem = ({chapter, onPress}) => {
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