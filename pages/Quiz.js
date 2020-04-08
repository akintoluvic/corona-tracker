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
import TopNav from '../components/TopNav';
import Question from '../components/Questions';


const Quiz = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <View style={styles.scroll}>
          <Question />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9FAFF',
      justifyContent: 'space-around'
    },
    scroll: {
      flex: 1,
      paddingTop: 25,
      paddingLeft: 25,
      paddingRight: 25,
      justifyContent: 'space-around'
    },
  });

export default Quiz;
