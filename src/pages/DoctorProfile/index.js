import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../component';
import {colors} from '../../utils';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <ScrollView>
        <Profile name="Nairobu Putri Hadya" desc="Dokter Anak" />
        <Gap height={10} />
        <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
        <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
        <ProfileItem label="No. STR" value="12737373827328" />
        <View style={styles.action}>
          <Button
            title="Start Consultation"
            onPress={() => navigation.navigate('Chatting')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingBottom: 40, paddingTop: 23},
});
