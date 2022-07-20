import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';


const Stack = createNativeStackNavigator();



export default function App() {

  return (
    <>
    <StatusBar style="light" />
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ // way of settinf default options ofr all screen, still individual screen options win when conflicting with overall options
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
          />
        </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
