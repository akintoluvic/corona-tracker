import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
  } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import TrackNow from '../components/TrackNow';
import History from '../components/History';
import Tip from '../components/Tip';
import Title from '../components/Title';

const Home = ({ navigation }) => {
  const takeQuiz = () => navigation.navigate('Quiz');
  const openTip = () => navigation.navigate('PreventionTips')
  return (
    <ScrollView style={styles.home}>
      <HomeHeader />
      <View style={styles.scroll}>
      <View style={styles.scrollContainer}>
          <TrackNow quiz={takeQuiz} />
          <History />
          <View style={styles.tips}>
            <Title title='Prevention, Tips and more' />
            <>
                <Tip openFullTip={openTip} />
                <Tip openFullTip={openTip} />
                <Tip openFullTip={openTip} />
                <Tip openFullTip={openTip} />
            </>
          </View>
      </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: '#4B5EB2',
    },
    scroll: {
      flex: 1,
      paddingTop: 5,
      backgroundColor: '#E4E9F5',
      borderTopRightRadius: 35,
      borderTopLeftRadius: 35
    },
    scrollContainer: {
      // height: 400,
      paddingLeft: 25,
      paddingRight: 25,
    },
    tips: {
      marginTop: -10,
    }
  });

export default Home;
