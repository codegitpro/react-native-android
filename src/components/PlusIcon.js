import React from 'react';
import {StyleSheet, Text} from 'react-native';

const PlusIcon = (props) => {
  return <Text style={styles.icon}>&#43;</Text>;
};

const styles = StyleSheet.create({
  // ...
  icon: {
    position: 'absolute',
    left: 20,
    color: '#F7B124',
  },
});

export default PlusIcon;
