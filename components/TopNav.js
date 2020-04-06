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
        <View>
            <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{ }}
            >
                
                <Image source={require('../images/tip-image.png')} />
            </TouchableOpacity> 
            <Text style={styles.title}>
                Prevention Tips
            </Text> 
        </View> 
  );
};

const styles = StyleSheet.create({
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
