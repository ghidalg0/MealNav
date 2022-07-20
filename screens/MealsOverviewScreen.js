import { Text, View, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native"; alternative to using route prop for nested components not registered as a screen

import { MEALS } from "../data/dummy-data";

export const MealsOverviewScreen = ({ route }) => {

  const catID = route.params.categoryId;

  return(
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catID} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
