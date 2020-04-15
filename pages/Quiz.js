import React, { useState, useContext } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
  } from 'react-native';
import Question from '../components/Questions';
import { GlobalContext } from '../context/GlobalState';


const Quiz = () => {
  const { questionNo, getQuestions } = useContext(GlobalContext);

  useEffect(() => {
      getQuestions()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scroll}>
          {/* { questionNo <= 12 ? <Question /> : <Text>Ade</Text>} */}
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
