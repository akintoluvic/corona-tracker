import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import PreventionTips from '../pages/PreventionTips';

const TopNav = () => {
  return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{ }}
            >
                <Text>X</Text> 
                {/* <Image source={require('../images/tip-image.png')} /> */}
            </TouchableOpacity> 
            <Text style={styles.title}>
                Prevention Tips
            </Text> 
        </View> 
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingLeft: 25,
        paddingRight: 25,
    },
    btn: {
    },
    title: {
        fontFamily: 'Roboto',
        color: '#85888A',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default TopNav;
