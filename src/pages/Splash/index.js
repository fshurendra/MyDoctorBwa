import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../asset/illustration';

export default function Splash() {
  return (
    <View style={styles.pages}>
      <ILLogo />
      <Text style={styles.text}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 20, fontWeight: '600', color: '#112340', marginTop: 20},
});
