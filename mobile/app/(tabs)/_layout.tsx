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
          name="grazy"
          options={{
            title: 'Introduçao',
            tabBarIcon: ({ color }) => <Entypo name="pencil" size={24} color="white" />,
          }}
        />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <Entypo name="login" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="yasmin"
        options={{
          title: '2010',
          tabBarIcon: ({ color }) => <Ionicons name="football" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '2014',
          tabBarIcon: ({ color }) => <Ionicons name="football" size={24} color="white" />,
        }}
      />
      <Tabs.Screen
        name="duda"
        options={{
          title: '2018',
          tabBarIcon: ({ color }) =><Ionicons name="football" size={24} color="white" />,
        }}
        />
        <Tabs.Screen
        name="isa"
        options={{
          title: '2022',
          tabBarIcon: ({ color }) =><Ionicons name="football" size={24} color="white" />,
        }}
        />
    </Tabs>
  );
}
