import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor1} from '../../asset';
import {Header, List} from '../../component';
import {colors} from '../../utils';
import Chatting from '../Chatting';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <List
        type="Next"
        profile={DummyDoctor1}
        name="Alexander Jennie"
        desc="wanita"
        onPress={() => navigation.navigate(Chatting)}
      />
      <List
        type="Next"
        profile={DummyDoctor1}
        name="Alexander Jennie"
        desc="wanita"
      />
      <List
        type="Next"
        profile={DummyDoctor1}
        name="Alexander Jennie"
        desc="wanita"
      />
      <List
        type="Next"
        profile={DummyDoctor1}
        name="Alexander Jennie"
        desc="wanita"
      />
      <List
        type="Next"
        profile={DummyDoctor1}
        name="Alexander Jennie"
        desc="wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
