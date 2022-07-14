/* eslint-disable prettier/prettier */
import {Button, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';

const MainPage = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Text>Welcome a tu pagina principal</Text>
      <Button title="LoginPage" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainPage;
