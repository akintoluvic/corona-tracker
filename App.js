import 'react-native-gesture-handler';
import React, { useState } from 'react';
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

  const [ userToken, setUserToken ] = useState(true); // null or token
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isSignout, setIsSignout ] = useState(false);
  
  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {userToken == false ? (
            // No token found, user isn't signed in
            <>
              <Stack.Screen name="Login" component={Login}
                options={{
                  title: '',
                  headerStyle: {
                    backgroundColor: '#4B5EB2',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                  // When logging out, a pop animation feels intuitive
                  // You can remove this if you want the default 'push' animation
                  animationTypeForReplace: isSignout ? 'pop' : 'push',
                }}
              />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          ) : (
            // User is signed in
            <>
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
              
              
              <Stack.Screen 
                name="Quiz" 
                component={Quiz}
                options={{title: 'Symptoms Quiz'}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
};



// const Screens = () => {
//   return (
//     <GlobalProvider>
//       <App />
//     </GlobalProvider>
//   )
// }
export default App;