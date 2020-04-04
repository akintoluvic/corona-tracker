import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

const TrackNow = ({ title }) => {
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

export default TrackNow;
