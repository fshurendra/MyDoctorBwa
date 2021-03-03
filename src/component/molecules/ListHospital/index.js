import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyHospital1} from '../../../asset';
import {colors, fonts} from '../../../utils';

export default function ListHospital() {
  return (
    <View style={styles.container}>
      <Image source={DummyHospital1} style={styles.picture} />
      <View>
        <Text style={styles.title}>Rumah Sakit</Text>
        <Text style={styles.title}>Citra Bunga Meredeka</Text>
        <Text style={styles.address}>jln. Surya Permata 50</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  picture: {width: 80, height: 60, borderRadius: 11, marginRight: 16},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 16,
  },
});