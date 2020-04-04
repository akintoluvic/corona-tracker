import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Title = ({ title }) => {
  return (
    <View>
        <Text style={styles.title}>
            { title }
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingTop: 30,
    paddingBottom: 25,
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default Title;
