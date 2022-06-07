import React, { FunctionComponent } from "react";
//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "../Screens/InitialScreen";

export type RootStackNavigation = {
  LandingScreen: undefined;
};

const Stack = createStackNavigator<RootStackNavigation>();

const NavigationRoot: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;
