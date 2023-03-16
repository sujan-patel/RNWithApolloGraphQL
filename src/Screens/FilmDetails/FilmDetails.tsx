import React, { useEffect } from "react";
import { Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import { useQuery } from "@apollo/client";
import moment from "moment";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SingleFilm } from "../../Query";
import styles from "./Style";
import Loader from "../../Library/Loader";

export const FilmDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { loading, error, data } = useQuery(SingleFilm, {
    variables: { filmId: route.params ? route?.params?.filmId : "" },
  });

  useEffect(() => {
    navigation.setOptions({
      title: data?.film?.title || "",
    });
  }, [navigation, data]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Text>Error :(</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 30 }}
      >
        <Image
          style={{
            width: "100%",
            height: 230,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          source={require("../../Assets/starwarssaga.jpg")}
        />
        <View style={styles.cardContainer}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 15,
            }}
          >
            <View style={{ width: "50%", justifyContent: "flex-start"}}>
              <Text style={styles.boldText}>Created:</Text>
              <Text>{moment(data.film.created).format("DD MMMM YYYY")}</Text>
            </View>

            <View style={{width: "50%", justifyContent: "flex-start" }}>
              <Text style={styles.boldText}>Release Date:</Text>
              <Text>
                {moment(data.film.releaseDate).format("DD MMMM YYYY")}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginBottom: 15,
            }}
          >
            <View style={{ width: "50%", justifyContent: "flex-start" }}>
              <Text style={styles.boldText}>Director:</Text>
              <Text>{data.film.director}</Text>
            </View>

            <View style={{ width: "50%", justifyContent: "flex-start" }}>
              <Text style={styles.boldText}>
                {data?.film?.producers.length > 1 ? "Producers:" : "Producer:"}
              </Text>
              <View>
                {data?.film?.producers
                  ? data?.film?.producers.map((producer, index) => (
                      <Text key={index} style={{ marginRight: 5 }}>
                        {producer}
                      </Text>
                    ))
                  : null}
              </View>
            </View>
          </View>

          <View style={{ width: "100%" }}>
            <Text style={styles.boldText}>Opening Crawl:</Text>
            <Text>{data.film.openingCrawl}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
