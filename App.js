// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Components/pages/login';
import ForgetPassword from './Components/pages/forgetPassword';
import SignUp from './Components/pages/signUp';
import MainPage from './Components/pages/MainPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Forget_Password" component={ForgetPassword} options={{ headerShown: false }}/>
        <Stack.Screen name="signUp" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
