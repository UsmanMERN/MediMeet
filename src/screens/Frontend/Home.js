import Header from '../../components/Header';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // marginTop: 20
  }
})

export default Home;
