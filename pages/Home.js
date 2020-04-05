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
    <SafeAreaView>
      <HomeHeader />
      <ScrollView style={styles.scrollContainer}>
          <TrackNow />
          <Tips />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    scrollContainer: {
      paddingTop: 5,
      paddingBottom: 25,
      paddingLeft: 25,
      paddingRight: 25,
      fontFamily: 'Roboto',
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: '#2D3136',
      borderTopRightRadius: 35,
      borderTopLeftRadius: 35
    }
  });

export default Home;
