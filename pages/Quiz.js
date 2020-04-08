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
import PreventionHeader from '../components/PreventionHeader';
import PreventionBody from '../components/PreventionBody';
import References from '../components/References';

const Quiz = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <View style={styles.scroll}>
        <ScrollView style={styles.scrollContainer}>
            <PreventionHeader />
            <PreventionBody />
            <References />
        </ScrollView>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9FAFF',
    },
    scroll: {
      flex: 1,
      paddingTop: 25,
      paddingLeft: 25,
      paddingRight: 25,
    },
    scrollContainer: {
      
    },
  });

export default Quiz;
