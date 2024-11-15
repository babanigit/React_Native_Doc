import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(
    colorScheme === "dark" ? DarkTheme : DefaultTheme
  );

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Toggle Theme Function
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === DarkTheme ? DefaultTheme : DarkTheme
    );
  };

  return (
    <ThemeProvider value={theme}>
      <View style={{ flex: 1 }}>
        {/* Navigation Stack */}
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>

        {/* Theme Toggle Button */}
        <View style={{ padding: 10, alignItems: "center" }}>
          <Button onPress={toggleTheme} title="Toggle Theme" />
        </View>

        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
