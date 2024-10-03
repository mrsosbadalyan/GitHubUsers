// app/navigation/AppNavigator.jsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen 
        name="UserList" 
        component={UserListScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="UserDetails" 
        component={UserDetailsScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
