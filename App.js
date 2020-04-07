import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Home from './pages/Home';
import PreventionTips from './pages/PreventionTips';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Home />
      {/* <PreventionTips /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B5EB2',
    flex: 1,
  },
});

export default App;
