import 'react-native-gesture-handler';
import React, { useState, useContext } from 'react';
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
import { GlobalProvider } from './context/GlobalState';
import {createStackNavigator} from '@react-navigation/stack';
import { GlobalContext } from './context/GlobalState';


const Stack = createStackNavigator();

const App = () => {

  // const [ userToken, setUserToken ] = useState(true); // null or token
  // const [ isLoading, setIsLoading ] = useState(false);
  // const [ isSignout, setIsSignout ] = useState(false);
  
 

  const { userToken, isSignout, isLoading } = useContext(GlobalContext);
  
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
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 0,
                  },
                  // When logging out, a pop animation feels intuitive
                  // You can remove this if you want the default 'push' animation
                  animationTypeForReplace: isSignout ? 'pop' : 'push',
                }}
              />
              <Stack.Screen name="SignUp" component={SignUp} 
                options={{
                  title: '',
                  headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 0,
                  },
                  // When logging out, a pop animation feels intuitive
                  // You can remove this if you want the default 'push' animation
                  animationTypeForReplace: isSignout ? 'pop' : 'push',
                }}
              />
            </>
          ) : (
            // User is signed in
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  title: '',
                  headerStyle: {
                    backgroundColor: '#4B5EB2',
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 0,
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

export default App;