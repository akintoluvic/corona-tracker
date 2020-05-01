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
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Title from './Title';

const History = () => {
  return (
      <>
        <Title title='Daily Tracking History' />
        <View style={styles.container}>
            <Image source={require('../images/corona.png')} />
            <View style={styles.contain}>
                <Text style={styles.title}>
                    Tracking your health
                </Text>
                <Text style={styles.title}>
                    helps in early detection
                </Text>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>{ }}
                >
                    <Text style={styles.btnText}>
                        Track now
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
      </>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#22272C',
    },
    contain: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: 14,
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

export default History;
