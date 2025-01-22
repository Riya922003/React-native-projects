import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GlobalProvider } from "@/lib/GlobalProvider";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Katibeh-Regular": require("@/assets/fonts/Katibeh-Regular.ttf"),
    "karma-regular": require("@/assets/fonts/Karma-Regular.ttf"),
    "kaushan-script": require("@/assets/fonts/kaushan-script.regular.ttf"),
    "karma-bold": require("@/assets/fonts/Karma-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </GlobalProvider>
  );
}