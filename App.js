import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ // way of setting default options of all screen, still individual screen options win when conflicting with overall options
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#3f2f25" }
        }}>
          <Stack.Screen
            name="Meals Categories"
            component={CategoriesScreen}
            options={{
              title: "All Meals Categories",
            }}
          />
          <Stack.Screen
            name="Meals Overview"
            component={MealsOverviewScreen}
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }} setting title dynamically
          />
          <Stack.Screen
            name="Meal Detail"
            component={MealDetailScreen}
            options={{
              title: "Meal Detail",
            }}
          />
        </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
