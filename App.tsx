import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Bai1 from './Bai/bai1';
import Bai2 from './Bai/bai2';
import Bai3 from './Bai/bai3';


const App = () => {
  return (
   
    <View style={styles.container}>
      <Bai3/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
