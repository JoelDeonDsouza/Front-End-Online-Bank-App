import React, { FunctionComponent } from "react";
//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "../Screens/InitialScreen";
import HomeScreen from "../Screens/Home";
import { colors } from "../Components/Colors";
import WelcomeGreetong from "../Components/Header/greeting";
import Profile from "../Components/Header/profile";
import profile from "../assets/profile.png";

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
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRight: () => (
            <Profile
              img={profile}
              imgContainerStyle={{ backgroundColor: colors.medium }}
            />
          ),
        }}
      >
        {/* Just testing home navigation function */}
        {/* <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: (props) => (
              <WelcomeGreetong
                mainText="Hey Joe"
                subText="Good to see you!"
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoot;
