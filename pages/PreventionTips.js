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
import PreventionHeader from '../components/PreventionHeader';
import PreventionBody from '../components/PreventionBody';
import Tips from '../components/Tips';

const PreventionTips = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PreventionHeader />
      <View style={styles.scroll}>
        <ScrollView style={styles.scrollContainer}>
            <PreventionBody />
        </ScrollView>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 25,
      paddingRight: 25,
    },
    scroll: {
      flex: 1,
      paddingTop: 25,
    },
    scrollContainer: {
      // height: 400,
    },
  });

export default PreventionTips;
