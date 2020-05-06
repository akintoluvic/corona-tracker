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
  markedDates={{
    '2017-12-14': {
      periods: [
        {startingDay: false, endingDay: true, color: '#5f9ea0'},
        {startingDay: false, endingDay: true, color: '#ffa500'},
        {startingDay: true, endingDay: false, color: '#f0e68c'}
      ]
    },
    '2017-12-15': {
      periods: [
        {startingDay: true, endingDay: false, color: '#ffa500'},
        {color: 'transparent'},
        {startingDay: false, endingDay: false, color: '#f0e68c'}
      ]
    }
  }}
  // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
  markingType='multi-period'
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
        // padding: 25,
        borderRadius: 15,
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
