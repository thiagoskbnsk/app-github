import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerLayoutPreset: 'center',
          headerBackTitleVisible: 'false',
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#ffffff',
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Usuários' }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{ title: 'Usuário' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
