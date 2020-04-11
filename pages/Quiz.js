import React, { useContext } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
  } from 'react-native';
import Question from '../components/Questions';
import { GlobalContext } from '../context/GlobalState';


const Quiz = () => {
  const { questions } = useContext(GlobalContext);

  return (
    <SafeAreaView style={styles.container}>
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
