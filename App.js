import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('./images/logo.png')} />
      </View>
      <View style={styles.greet}>
        <Text style={styles.greetSmall} >
          Welcome, Pauline
        </Text>
        <Text style={styles.greetBig} >
          How are you feeling?
        </Text>
        <Text style={styles.greetSmall} >
          March 28, 2020
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22272C',
    
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 25,
  },
  greet: {
    paddingLeft: 30,
    paddingBottom: 38,
  },
  greetBig: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  greetSmall: {
    fontFamily: 'Roboto',
    color: '#E2E3E3',
    fontSize: 14,
  }
});

export default App;
