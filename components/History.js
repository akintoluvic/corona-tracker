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
                '2020-05-20': {textColor: 'green'},
                '2020-05-22': {startingDay: true, color: 'green'},
                '2020-05-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
                '2020-05-04': {disabled: true, startingDay: true, color: 'yellow', endingDay: true}
            }}
            // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
            markingType={'period'}
        />
                
                {/* <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>{ }}
                >
                    <Text style={styles.btnText}>
                        Track now
                    </Text>
                </TouchableOpacity> */}
            
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
