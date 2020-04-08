import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';

const Question = () => {
  return (
      <View style={styles.container} >
          <Text style={styles.title}>
              Question 1 of 13
          </Text>
          <Text style={styles.body}>
              Do you have cough?
          </Text>
          <View style={styles.btns}>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>{ }}
                >
                    <Text style={styles.btnText}>
                        Yes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>{ }}
                >
                    <Text style={styles.btnText}>
                        No
                    </Text>
                </TouchableOpacity>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        borderRadius: 15,
        backgroundColor: '#E4E9F5',
    },
    title: {
        fontFamily: 'Roboto',
        color: '#000',
        fontSize: 14,
    },
    body: {

    },
    btn: {
        borderRadius: 5,
        backgroundColor: '#E49008',
        marginTop: 7,
        padding: 5,
        width: 107
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
    }
});

export default Question;
