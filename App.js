import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import EventsScreen from "./screens/EventsScreen";
import ContactScreen from "./screens/ContactScreen";
import Test from "./screens/Test";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Accordion} from "react-native-paper";


const Tab = createBottomTabNavigator();

export default function App() {
  return (   
  <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Events') {
              iconName = focused ? 'business-outline' : 'business-sharp';
            }
              else if (route.name === 'Contact') {
              iconName = focused ? 'people-circle' : 'people-circle-outline';
            }
              else if (route.name === 'Test') {
              iconName = focused ? 'build' : 'build-outline';
              }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Test" component={Test} />
      </Tab.Navigator>
  </NavigationContainer>
  );
}


