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

const Home = () => {
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
      // height: 100,
    },
    scroll: {
      paddingTop: 5,
      paddingLeft: 25,
      paddingRight: 25,
      backgroundColor: '#2D3136',
      borderTopRightRadius: 35,
      borderTopLeftRadius: 35
    },
    scrollContainer: {
      // flex: 1
    },
  });

export default Home;
