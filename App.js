import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Components/pages/login';
import ForgetPassword from './Components/pages/forgetPassword';
import SignUp from './Components/pages/signUp';
import MainPage from './Components/pages/MainPage';
import Navbar from './Components/Navbar/bottomNavbar';
import ShopPage from './Components/pages/shopPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
        <Stack.Screen name="Navbar" component={Navbar} options={{ headerShown: false }} />
        <Stack.Screen name="ShopPage" component={ShopPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
