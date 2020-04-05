import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Title from './Title';
import Tip from './Tip';

const History = () => {
  return (
      <>
        <Title title='Prevention, Tips and more' />
        <View>
            <Tip />
            <Tip />
            <Tip />
            
        </View>
      </>
  );
};

const styles = StyleSheet.create({
});

export default History;
