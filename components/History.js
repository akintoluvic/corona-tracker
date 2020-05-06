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

        <Calendar
            style={styles.calendar}
            // Collection of dates that have to be colored in a special way. Default = {}
            markedDates={{
                '2020-05-20': {startingDay: true, color: 'orange', textColor: 'white',  endingDay: true},
                '2020-05-21': {startingDay: true, color: 'orange', textColor: 'white',  endingDay: true},
                '2020-05-22': {startingDay: true, color: 'green'},
                '2020-05-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
                '2020-05-04': {disabled: true, startingDay: true, color: 'yellow', endingDay: true}
            }}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            markingType={'period'}
        />

        <View style={styles.legend}>
            <View style={{...styles.hero, backgroundColor: '#517761',}}></View>
            <Text style={{color: '#517761',}}>Normal</Text>
            <View style={{...styles.hero, backgroundColor: '#FCC154',}}></View>
            <Text style={{color: '#FCC154',}}>Mild</Text>
            <View style={{...styles.hero, backgroundColor: '#DD6243',}}></View>
            <Text style={{color: '#DD6243',}}>Severe</Text>
        </View>
        <Text style={styles.analysis}>
            You have only developed mild symptoms so, but do continue to isolate yourself.
        </Text>
                
            <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{ }}
            >
                <Text style={styles.btnText}>
                        Take today's test
                </Text>
            </TouchableOpacity>
            
        </View>
      </>
  );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        // backgroundColor: '#22272C',
    },
    calendar: {
        borderRadius: 15,
        paddingBottom: 5,
        paddingTop: 2,
        // backgroundColor: '#22272C',
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
    legend: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
    },
    hero: {
        width: 13,
        height: 11,
        borderRadius: 5,
    },
    analysis: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#4B5EB2',
        paddingTop: 5,
    },
    btn: {
        borderRadius: 5,
        backgroundColor: '#E49008',
        margin: 19,
        padding: 7,
        backgroundColor: '#F68D4B',
        borderRadius: 5,
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
    }
});

export default History;
