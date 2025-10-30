import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <Entypo name="login" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="grazy"
        options={{
          title: 'Introduçao',
          tabBarIcon: ({ color }) => <Ionicons name="football" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="yasmin"
        options={{
          title: '2010',
          tabBarIcon: ({ color }) => <Ionicons name="football" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="sasa"
        options={{
          title: '2014',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
