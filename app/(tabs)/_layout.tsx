import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useTheme } from '@react-navigation/native';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { colors } = useTheme(); // Get current theme colors


  return (

    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,

        headerStyle: { backgroundColor: colors.background }, // Apply theme colors
        headerTintColor: colors.text,
        tabBarStyle: { backgroundColor: colors.card }, // Tab bar background
        tabBarActiveTintColor: colors.primary, // Active tab color
        tabBarInactiveTintColor: colors.text, // Inactive tab color

      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
