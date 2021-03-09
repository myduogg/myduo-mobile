import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {OptionsNavigator} from '../styles';
import Login from '../scenes/login';
//import {Loading} from '../components/atoms/';
const AuthNavigator: React.FC = ({}) => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          name={'Login'}
          component={Login}
          options={OptionsNavigator.loginOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AuthNavigator;
