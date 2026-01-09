import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import CameraScreen from './screens/CameraScreen';
import RecipeLibraryScreen from './screens/RecipeLibraryScreen';
import { Colors } from './constants/theme';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: Colors.surface,
              borderTopColor: Colors.border,
              borderTopWidth: 1,
              paddingBottom: 8,
              paddingTop: 8,
              height: 65,
            },
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: Colors.textSecondary,
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
          }}
        >
          <Tab.Screen
            name="Camera"
            component={CameraScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Text style={{ fontSize: 28 }}>📷</Text>
              ),
            }}
          />
          <Tab.Screen
            name="Recipes"
            component={RecipeLibraryScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Text style={{ fontSize: 28 }}>📚</Text>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
