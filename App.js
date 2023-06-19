const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import OpenPage from "./screens/OpenPage";
import Syahdan from "./screens/Syahdan";
import Murah from "./screens/Murah";
import DetilAyam from "./screens/DetilAyam";
import Ayam from "./screens/Ayam";
import CategoryPage from "./screens/CategoryPage";
import Sea from "./screens/Sea";
import DetilSteak from "./screens/DetilSteak";
import Sapi from "./screens/Sapi";
import DetilRamen from "./screens/DetilRamen";
import Japanese from "./screens/Japanese";
import DetilIkan from "./screens/DetilIkan";
import Seafood from "./screens/Seafood";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Aleo_bold: require("./assets/fonts/Aleo_bold.ttf"),
    Basic_regular: require("./assets/fonts/Basic_regular.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="OpenPage"
              component={OpenPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Syahdan"
              component={Syahdan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Murah"
              component={Murah}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetilAyam"
              component={DetilAyam}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ayam"
              component={Ayam}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CategoryPage"
              component={CategoryPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetilSteak"
              component={DetilSteak}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sapi"
              component={Sapi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetilRamen"
              component={DetilRamen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Japanese"
              component={Japanese}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetilIkan"
              component={DetilIkan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Seafood"
              component={Seafood}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
