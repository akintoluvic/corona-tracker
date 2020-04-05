import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const Tip = () => {
  return (
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>{ }}
                >   
                    <Image source={require('../images/tip-image.png')} />
                    <View style={styles.contain}>
                        <Text style={styles.title}>
                            Five steps to kicking out corona virus
                        </Text>
                        <Text style={styles.source}>
                            World Health Organization
                        </Text>
                    </View>
                </TouchableOpacity>
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
        

    },
    title: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: 16,
    },
    source: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: 14,
    },
    // btn: {
    //     borderRadius: 5,
    //     backgroundColor: '#E49008',
    //     marginTop: 7,
    //     padding: 5,
    //     width: 107
    // },
});

export default Tip;
