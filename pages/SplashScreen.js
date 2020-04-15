import React, { useState, useContext } from 'react';
import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';

const SplashScreen = () => {

  return (
    <View style={styles.container}>
        <Image source={require('../images/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4B5EB2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scroll: {
      flex: 1,
      paddingTop: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 120,
      padding: 120,
    },
  });

export default SplashScreen;
