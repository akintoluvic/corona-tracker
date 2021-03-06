import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import PreventionTips from '../pages/PreventionTips';

const TopNav = ({ title }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => { }}
            >
                <Image source={require('../images/left.png')} />
            </TouchableOpacity>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
