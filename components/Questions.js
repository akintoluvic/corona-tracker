import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { GlobalContext } from '../context/GlobalState';

const Questions = () => {
    const [ currentResult, setCurrentResult ] = useState([]);
    const [ result, setResult ] = useState([]);
    const { 
        questions, 
        questionNo, 
        resetQuestionNo, 
        incrementQuestionNo, 
        results, 
        urrentResult,
    } = useContext(GlobalContext);

    console.log(currentResult.length, questionNo)
    
    const scoreQuestion = (val) => {
        
        if (currentResult.length === 13) {
            resetQuestionNo(0)
            setResult([...result, currentResult])
            setCurrentResult([])
        } else {
            incrementQuestionNo(questionNo);
            setCurrentResult([...currentResult, {questionNo: val}])
        }
    }


  return (
      <View style={styles.container} >
          <Text style={styles.title}>
              
              {currentResult.length === 13 ? "" : `Question ${questionNo+1} of 13`}
          </Text>
          <Text style={styles.body}>
              {/* {questions[questionNo].question} */}
              {currentResult.length === 13 ? "I'm good" : questions[questionNo].question}
          </Text>
            { currentResult.length !== 13 ? 
                <View>
                    <TouchableOpacity 
                        style={{...styles.btn, backgroundColor: '#4B5EB2',}}
                        onPress={()=>scoreQuestion(questions[questionNo].value)}
                    >
                        <Text style={styles.btnText}>
                            Yes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{...styles.btn, backgroundColor: '#E49008',}}
                        onPress={()=>scoreQuestion(0)}
                    >
                        <Text style={styles.btnText}>
                            No
                        </Text>
                    </TouchableOpacity>
                </View> :
                <View>
                    <TouchableOpacity 
                        style={{...styles.btn, backgroundColor: '#4B5EB2',}}
                        onPress={()=>{}}
                    >
                        <Text style={styles.btnText}>
                            Guidelines on isolation
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{...styles.btn, backgroundColor: '#E49008',}}
                        onPress={()=>{}}
                    >
                        <Text style={styles.btnText}>
                            Return to Home
                        </Text>
                    </TouchableOpacity>
                </View> }

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
