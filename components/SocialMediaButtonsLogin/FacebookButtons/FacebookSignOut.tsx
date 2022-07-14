import React from 'react';
import {Button} from 'react-native-paper';
import logicGenericButtonLogOut from '../../ComponentLogic/LogicFacebookButton/logicGenericButtonLogOut';

const FacebookSignOut = (props: any = {}) => {
  return (
    <Button
      icon="facebook"
      mode="contained"
      color="#3b5998"
      onPress={() =>
        logicGenericButtonLogOut().then(data => {
          console.log('Signed Out with Facebook! ' + JSON.stringify(data));
        })
      }
      style={props.style}>
      Facebook
    </Button>
  );
};

export default FacebookSignOut;
