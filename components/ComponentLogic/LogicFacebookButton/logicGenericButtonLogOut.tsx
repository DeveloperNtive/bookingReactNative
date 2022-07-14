import {LoginManager} from 'react-native-fbsdk-next';

const logicGenericButtonLogOut = async () => {
  const result = LoginManager.logOut;
  console.log(result.toString());
  return result;
};

export default logicGenericButtonLogOut;
