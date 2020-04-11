import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
  } from 'react-native';
  import TopNav from '../components/TopNav';
import PreventionHeader from '../components/PreventionHeader';
import PreventionBody from '../components/PreventionBody';
import References from '../components/References';

const PreventionTips = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav title='Prevention Tips'/>
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
      
    },
    scrollContainer: {
      paddingLeft: 25,
      paddingRight: 25,
    },
  });

export default PreventionTips;
