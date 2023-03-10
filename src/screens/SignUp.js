import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/AuthContent';
import LoadingOverlay from '../components/LoadingOverlay';
import { AuthContext } from '../store/authContext';


function SignUpScreen
() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await signUp(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating new user..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignUpScreen
;