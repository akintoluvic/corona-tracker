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
      <View>
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
                </TouchableOpacity></View>
  );
};

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1,
    },
    contain: {
        paddingLeft: 18,

    },
    title: {
        fontFamily: 'Roboto',
        color: '#000',
        fontSize: 16,
    },
    source: {
        fontFamily: 'Roboto',
        color: '#85888A',
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
