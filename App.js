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

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Home /> */}
        {/* <PreventionTips /> */}
        {/* <Login /> */}
        {/* <SignUp /> */}
        <Quiz />
      </View>
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
