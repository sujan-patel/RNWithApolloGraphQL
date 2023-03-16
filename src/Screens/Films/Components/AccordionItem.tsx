import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

export interface Species {
  classification: string;
  name: string;
}
export interface SpeciesConnection {
  species: Species[];
}
export interface Film {
  director: string;
  id: string;
  releaseDate: string;
  speciesConnection: SpeciesConnection;
  title: string;
}
export interface FilmProp {
  film: Film;
}

const styles = StyleSheet.create({
  accordionContainer: {
    borderWidth: 1,
    borderRadius: 15,
    margin: 5,
    padding: 10,
  },
  speciesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
    marginHorizontal: 5,
  },
  speciesItem: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 5,
    padding: 5,
    borderWidth: 0.5,
  },
});

export const AccordionItem = ({ film }: FilmProp) => {
  const navigation = useNavigation();
  const { title, speciesConnection } = film;
  const species = speciesConnection && speciesConnection.species;

  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {}, [expanded]);

  return (
    <View
      style={styles.accordionContainer}
    >
      <Pressable onPress={() => setExpanded(!expanded)} style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name={"movie"} size={25} />
          <Text style={{ marginLeft: 5 }}>{title}</Text>
        </View>
        <Pressable
          onPress={() => { 
            navigation.navigate('FilmDetails', {
              filmId: film.id,
            })
          }}
        >
          <Icon name={"information-outline"} size={25} />
        </Pressable>
      </Pressable>
      {expanded ? (
        <View style={styles.speciesContainer}>
          {species.length
            ? species.map((item) => (
              <View key={item.name} style={styles.speciesItem}>
                <View>
                  <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                  <Text>{item.classification}</Text>
                </View>
              </View>
            ))
            : null}
        </View>
      ) : null}
    </View>
  );
};
