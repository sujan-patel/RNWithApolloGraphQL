import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Style';


export const Header = () => {
  return (
    <View style={styles.header}>
      <Icon name={'fencing'} size={35} />
      <Text style={styles.headerTitle}>Star Wars</Text>
      <Icon name={'fencing'} size={35} />
    </View>
  );
  };