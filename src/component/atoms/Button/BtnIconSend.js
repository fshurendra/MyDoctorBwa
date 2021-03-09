import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../asset';
import {colors} from '../../../utils';

export default function BtnIconSend({disable}) {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSendDark />}
      {!disable && <IconSendLight />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingLeft: 8,
    paddingBottom: 8,
  }),
});
