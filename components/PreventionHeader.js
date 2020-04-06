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
    <View  style={styles.container}>
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
    container: {
        
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 5,
        marginTop: 36,
        marginBottom: 10,

    },
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
        marginBottom: 2,
        textAlign: 'center',
    },
    source: {
        fontFamily: 'Roboto',
        color: '#85888A',
        fontSize: 12,
        textAlign: 'center',
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
});

export default PreventionHeader;
