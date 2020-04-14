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
import { GlobalProvider } from './context/GlobalState';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}
            options={{
              topBar: {
                visible: false,
                height: 0,
              },
              
              
              // title: '',
              // headerStyle: {
              //   backgroundColor: '#4B5EB2',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              // },
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
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
          <Stack.Screen
            name="PreventionTips" 
            component={PreventionTips}
            options={{title: 'Prevention Tips'}}
          />
          
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen 
            name="Quiz" 
            component={Quiz}
            options={{title: 'Symptoms Quiz'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B5EB2',
    flex: 1,
  },
});

export default App;
