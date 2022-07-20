import { FlatList, View, StyleSheet } from "react-native";
import { MealItem } from "../components/MealItem";
// import { useRoute } from "@react-navigation/native"; alternative to using route prop for nested components not registered as a screen

import { MEALS } from "../data/dummy-data";

export const MealsOverviewScreen = ({ route }) => {

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    }

    return (
      <MealItem {...mealItemProps}/>
    );
  };

  return(
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
