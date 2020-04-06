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
import References from '../components/References';

const PreventionTips = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PreventionHeader />
      <View style={styles.scroll}>
        <ScrollView style={styles.scrollContainer}>
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
      
    },
    scroll: {
      flex: 1,
      paddingTop: 25,
      
    },
    scrollContainer: {
      // height: 400,
      paddingLeft: 25,
      paddingRight: 25,
    },
  });

export default PreventionTips;
