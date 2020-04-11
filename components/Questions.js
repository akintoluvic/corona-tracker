import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { GlobalContext } from '../context/GlobalState';

const Questions = () => {
    // const [ questionNo, setQuestionNo ] = useState(0);
    const { questions, questionNo, resetQuestionNo, incrementQuestionNo } = useContext(GlobalContext);
    console.log(questionNo)
    const scoreQuestion = () => {
        incrementQuestionNo(questionNo);
        questionNo === 13 ? resetQuestionNo(0): ''
    }

  return (
      <View style={styles.container} >
          <Text style={styles.title}>
              Question {questionNo+1} of 13
          </Text>
          <Text style={styles.body}>
              {questions[questionNo].question}
          </Text>
                <TouchableOpacity 
                    style={{...styles.btn, backgroundColor: '#4B5EB2',}}
                    onPress={()=>scoreQuestion()}
                >
                    <Text style={styles.btnText}>
                        Yes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{...styles.btn, backgroundColor: '#E49008',}}
                    onPress={()=>scoreQuestion()}
                >
                    <Text style={styles.btnText}>
                        No
                    </Text>
                </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 25,
        borderRadius: 15,
        backgroundColor: '#E4E9F5',
    },
    title: {
        fontFamily: 'Roboto',
        color: '#000',
        fontSize: 14,
        color: '#85888A',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 20,
    },
    body: {
        fontFamily: 'Roboto',
        fontSize: 24,
        lineHeight: 28,
        textAlign: 'center',
        marginBottom: 25,
        color: '#4B5EB2',
    },
    btn: {
        borderRadius: 5,
        backgroundColor: '#E49008',
        marginTop: 7,
        padding: 5,
        marginBottom: 13,
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    }
});

export default Questions;
