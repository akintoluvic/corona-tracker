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
import HomeHeader from '../components/HomeHeader';
import TrackNow from '../components/TrackNow';
import Tips from '../components/Tips';

const Tips = () => {
  return (
    <SafeAreaView style={styles.home}>
      <HomeHeader />
      <View style={styles.scroll}>
      <ScrollView style={styles.scrollContainer}>
          <TrackNow />
          <Tips />
      </ScrollView>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    home: {
      flex: 1,
    },
    scroll: {
      flex: 1,
      paddingTop: 5,
      backgroundColor: '#2D3136',
      borderTopRightRadius: 35,
      borderTopLeftRadius: 35
    },
    scrollContainer: {
      // height: 400,
      paddingLeft: 25,
      paddingRight: 25,
    },
  });

export default Tips;
