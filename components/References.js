import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const References = () => {
  return (
    <View  style={styles.container}>
        <Text style={styles.title}>
            References
        </Text>
        <Text style={styles.body}>
            https://www.who.int/news-room/detail/23-03-2020-pass-the-message-five-steps-to-kicking-out-coronavirus
        </Text>
        <Text style={styles.body}>
            https://www.who.int/news-room/detail/23-03-2020-pass-the-message-five-steps-to-kicking-out-coronavirus
        
        </Text>
        <Text style={styles.body}>
            https://www.who.int/news-room/detail/23-03-2020-pass-the-message-five-steps-to-kicking-out-coronavirus
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
    },
    title: {
        fontFamily: 'Roboto',
        color: '#5D6381',
        fontSize: 12,
        marginBottom: 10,
        paddingTop: 12,
        fontWeight: 'bold',
    },
    body: {
        fontFamily: 'Roboto',
        color: '#7B819B',
        fontSize: 12,
        marginBottom: 10,
        textDecorationLine: 'underline',
    },
});

export default References;
