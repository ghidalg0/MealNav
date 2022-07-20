import { View, Text, StyleSheet } from "react-native";

export const MealDetails = ({duration, complexity, affordability}) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{duration} min</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignitems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
