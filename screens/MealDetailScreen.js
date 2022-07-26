import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { MealDetails } from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { List } from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import { IconButton } from "../components/IconButton";

export const MealDetailScreen = ({route, navigation}) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => { console.log("Pressed") }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>}
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{uri: selectedMeal.imageUrl}}
        style={styles.mealImage}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  mealImage: {
    width: "90%",
    height: 300,
    borderRadius: 16,
    margin: 16,
    alignSelf: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  detailText:{
    color: "#fff",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  }
});
