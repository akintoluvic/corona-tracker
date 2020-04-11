import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Title from './Title'

const TrackNow = ({ quiz }) => {
  return (
      <View style={{flex:1}}>
        <Title title='Symptoms Tracker' />
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
                    onPress={()=>quiz()}
                >
                    <Text style={styles.btnText}>
                        Track now
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#F4F7FF',
    },
    contain: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontFamily: 'Roboto',
        color: '#000',
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

export default TrackNow;
