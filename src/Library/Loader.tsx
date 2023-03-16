import { StyleSheet, ActivityIndicator, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})
const Loader = () => {
  return (
    <View style={styles.container}><ActivityIndicator size="large" color="black" /></View>
  )
}

export default Loader;