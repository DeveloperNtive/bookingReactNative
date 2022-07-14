import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    auth()
      .signOut()
      .then(
        () => {
          console.log('Sign-out');
        },
        err => {
          console.log(err);
        },
      );
    return 'Signed-out';
    //   this.setState({ user: null }); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
    return error;
  }
};
