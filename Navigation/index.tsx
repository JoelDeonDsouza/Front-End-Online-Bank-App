import React, { FunctionComponent } from "react";
//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "../Screens/InitialScreen";
import HomeScreen from "../Screens/Home";
import { colors } from "../Components/Colors";

export type RootStackNavigation = {
  LandingScreen: undefined;
};

const Stack = createStackNavigator<RootStackNavigation>();

const NavigationRoot: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 100,
          },
          headerTintColor: colors.secondary,
        }}
      >
        {/* Just testing home navigation function */}
        {/* <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;
