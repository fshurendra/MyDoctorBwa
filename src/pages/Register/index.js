import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../component';
import {colors, useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {getData, storeData} from '../../utils';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onCountinue = () => {
    console.log(form);
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((succses) => {
        setLoading(false);
        setForm('reset');
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
        };
        Fire.database()
          .ref('user/' + succses.user.uid + '/')
          .set(data);
        storeData('user', data);
        navigation.navigate('UploadPhoto');
        console.log('register succses', succses);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
        console.log('error: ', error);
      });
  };
  return (
    <ScrollView>
      <>
        <View style={styles.page}>
          <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
          <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Input
                label="Full Name"
                value={form.fullName}
                onChangeText={(value) => setForm('fullName', value)}
              />
              <Gap height={24} />
              <Input
                label="Pekerjaan"
                value={form.profession}
                onChangeText={(value) => setForm('profession', value)}
              />
              <Gap height={24} />
              <Input
                label="Email"
                value={form.email}
                onChangeText={(value) => setForm('email', value)}
              />
              <Gap height={24} />
              <Input
                label="Password"
                value={form.password}
                onChangeText={(value) => setForm('password', value)}
                secureTextEntry
              />
              <Gap height={40} />
              <Button title="Continue" onPress={onCountinue} />
            </ScrollView>
          </View>
        </View>
        {loading && <Loading />}
      </>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
