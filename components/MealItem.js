import { Text, View, StyleSheet, Pressable, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MealDetails } from "./MealDetails";

export const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate("Meal Detail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: "#DDE2E6"}}
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{uri: imageUrl}}
              style={styles.mealImage}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealImage: {
    width: "100%",
    height: 200,
  },
  title: {
    margin: 8,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
