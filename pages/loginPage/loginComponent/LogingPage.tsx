/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import FacebookSignIn from '../../../components/SocialMediaButtonsLogin/FacebookButtons/FacebookSignIn';
import GoogleSignInB from '../../../components/SocialMediaButtonsLogin/GoogleButton/GoogleButtonLogin';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextInput
        label="User"
        value={email}
        activeUnderlineColor="black"
        onChangeText={userEmail => setEmail(userEmail)}
        style={{height: 45, width: '90%'}}
      />
      <TextInput
        label="Password"
        value={password}
        activeUnderlineColor="black"
        onChangeText={userPassword => setPassword(userPassword)}
        style={{height: 45, width: '90%'}}
        secureTextEntry
      />
      <Button
        icon="email"
        mode="contained"
        color="#0071C2"
        onPress={() => console.log('pressed')}
        style={{margin: 3, width: '90%'}}>
        Continuar con e-mail
      </Button>
      <Text style={{alignSelf: 'center'}}>o usa una de estas opciones</Text>
      <FacebookSignIn style={{margin: 3, width: '90%'}} />
      <GoogleSignInB
        style={{
          marin: 3,
          width: '92%',
          height: 43,
          alignSelf: 'center',
        }}
      />
      {/* <Text>Email: {email}</Text>
      <Text>PassWord: {password}</Text> */}
    </View>
  );
};

export default LoginPage;
