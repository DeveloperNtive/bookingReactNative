/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {onGoogleButtonPress} from '../../ComponentLogic/LogincGoogleButton/LogicGoogleButtonSignIn';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

const GoogleSignInB = (props: any = {}) => {
  type userGoogleData = {
    uid: String;
    id: String;
    firstName: String;
    lastName: String;
    fullName: String;
    email: String;
    phoneNumber: String | null;
  };
  return (
    <GoogleSigninButton
      style={props.style}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={() =>
        onGoogleButtonPress().then(data => {
          const {user, additionalUserInfo} = data;
          //if isNewUser === true save the user data to database else no
          const {isNewUser} = additionalUserInfo;
          const userInfo: userGoogleData = {
            uid: user?.uid,
            id: user.providerData[0].uid,
            firstName: 'undefined',
            lastName: 'undefined',
            fullName: additionalUserInfo?.profile?.name
              ? additionalUserInfo?.profile?.name
              : '',
            email: additionalUserInfo?.profile?.email
              ? additionalUserInfo?.profile?.email
              : '',
            phoneNumber: user?.providerData?.phoneNumber
              ? user?.providerData?.phoneNumber
              : null,
          };
          console.log('Signed in with Google!: ' + JSON.stringify(userInfo));
        })
      }
    />
  );
};

export default GoogleSignInB;
