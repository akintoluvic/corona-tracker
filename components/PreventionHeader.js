import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import TopNav from '../components/TopNav';

const PreventionHeader = () => {
  return (
    <View>
        <TopNav />
        <View style={styles.imageContainer}>
            <Image 
                source={require('../images/tip-image.png')} 
                style={styles.image}
            />
        </View>
        <Text style={styles.title}>
            Five steps to kicking out corona virus
        </Text>
        <Text style={styles.source}>
            World Health Organization
        </Text>
    </View>
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
    title: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: 16,
    },
    source: {
        fontFamily: 'Roboto',
        color: '#85888A',
        fontSize: 14,
    },
});

export default PreventionHeader;
