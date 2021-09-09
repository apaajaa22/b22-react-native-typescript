import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ForgotPassword, Home, Login, Register, WelcomePage} from '../screens';
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();

const Router = () => {
  const {token} = useSelector<any, any>(state => state.auth);
  return (
    <Stack.Navigator initialRouteName="WelcomePage">
      {token === null ? (
        <>
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
          <Stack.Screen
            name="WelcomePage"
            component={WelcomePage}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default Router;
