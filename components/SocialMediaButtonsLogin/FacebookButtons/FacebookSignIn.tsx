import React from 'react';
import {Button} from 'react-native-paper';
import onFacebookButtonPress from '../../ComponentLogic/LogicFacebookButton/logicGenericButton';

const FacebookSignIn = (props: any = {}) => {
  type userFacebookData = {
    uid: String;
    id: String;
    firstName: String;
    lastName: String;
    fullName: String;
    email: String;
    phoneNumber: String | null;
  };
  return (
    <Button
      icon="facebook"
      mode="contained"
      color="#3b5998"
      onPress={() =>
        onFacebookButtonPress().then(token => {
          const {user, additionalUserInfo} = token;
          //if isNewUser === true save the user data to database else no
          const {isNewUser} = additionalUserInfo;
          const userInfo: userFacebookData = {
            uid: user.uid,
            id: additionalUserInfo?.profile?.id,
            firstName: additionalUserInfo?.profile?.first_name,
            lastName: additionalUserInfo?.profile?.last_name,
            fullName: additionalUserInfo?.profile?.name,
            email: additionalUserInfo?.profile?.email,
            phoneNumber: user.phoneNumber,
          };
          console.log('Signed in with Facebook!' + JSON.stringify(userInfo));
        })
      }
      style={props.style}>
      Facebook
    </Button>
  );
};

export default FacebookSignIn;
