import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ForgotPassword, Login, Register} from '../screens';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
