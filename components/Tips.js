import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Title from './Title';
import Tip from './Tip';

const History = () => {
  return (
      <View>
        <Title title='Prevention, Tips and more' />
        <>
            <Tip />
            <Tip />
            <Tip />
            <Tip />
            <Tip />
            <Tip />
            
        </>
      </View>
  );
};

const styles = StyleSheet.create({
});

export default History;
