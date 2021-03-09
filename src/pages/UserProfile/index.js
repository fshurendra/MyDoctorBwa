import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Gap, Header, List, Profile} from '../../component';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <ScrollView>
        <Profile name="Syahnaha syadin" desc="Product Designer" />
        <Gap height={14} />
        <List
          name="Edit Profile"
          desc="Last Update Yesterday"
          type="next"
          icon="edit-profile"
          onPress={() => navigation.navigate('UpdateProfile')}
        />
        <List
          name="Edit Profile"
          desc="Last Update Yesterday"
          type="next"
          icon="language"
        />
        <List
          name="Edit Profile"
          desc="Last Update Yesterday"
          type="next"
          icon="rate"
        />
        <List
          name="Edit Profile"
          desc="Last Update Yesterday"
          type="next"
          icon="help"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1, paddingBottom: 16},
});
