import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Home from './pages/Home';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#22272C',
    flex: 1,
  },
});

export default App;
