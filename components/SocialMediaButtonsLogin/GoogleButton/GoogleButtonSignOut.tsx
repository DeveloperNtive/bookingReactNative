import React from 'react';
import {Button} from 'react-native-paper';
import {signOut} from '../../ComponentLogic/LogincGoogleButton/LogicGoogleButtonSignOut';

export const GoogleSingOut = () => {
  return (
    <Button
      icon="google"
      onPress={() =>
        signOut().then(data =>
          console.log('Signed out with Google!: ' + JSON.stringify(data)),
        )
      }>
      Gmail
    </Button>
  );
};
