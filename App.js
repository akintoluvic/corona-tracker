import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  StyleSheet,
  View,
} from 'react-native';
import Home from './pages/Home';
import PreventionTips from './pages/PreventionTips';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Quiz from './pages/Quiz';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{title: ''}}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#4B5EB2',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="PreventionTips" component={PreventionTips} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B5EB2',
    flex: 1,
  },
});

export default App;
