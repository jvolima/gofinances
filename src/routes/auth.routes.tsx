import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen
        name="SignIn"
        options={{
          headerShown: false
        }}
        component={SignIn}
      />
    </Navigator>
  )
}