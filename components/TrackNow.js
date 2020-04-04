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
import Title from './Title'

const TrackNow = () => {
  return (
      <>
        <Title title='Symptoms Tracker' />
        <View style={styles.container}>
            <Image source={require('../images/corona.png')} />
            <View>
                <Text style={styles.title}>
                    { title }
                </Text>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>{ }}
                >
                    <Text style={styles.btnText}>
                        + Add Item
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

    },
    title: {
        paddingTop: 30,
        paddingBottom: 25,
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default TrackNow;
