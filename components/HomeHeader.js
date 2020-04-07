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

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../images/logo.png')} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B5EB2',
    // height: 231,
  },
  logo: {
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
    color: '#fff',
    fontSize: 14,
  }
});

export default HomeHeader;
