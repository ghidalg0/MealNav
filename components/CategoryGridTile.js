import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export const CategoryGridTile = ({ title, color, onPress }) => {

  // const navigation = useNavigation(); to be used for nested navigation while navigation.navigate() works only for screens

  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#DDE2E6" }}
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "#fff", //on IOS, backgroundColor is required for allowing the shadow to appear
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  }
});
