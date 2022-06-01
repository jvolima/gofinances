import React, { useEffect, useState } from "react";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}