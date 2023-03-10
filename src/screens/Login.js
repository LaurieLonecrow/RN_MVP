import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { login } from '../api/usersApi';
import { AuthContext } from '../store/authContext';

import AuthContent from '../components/AuthContent';
import LoadingOverlay from '../components/LoadingOverlay';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    try {
      const {token} = await login(email, password);
      authCtx.authenticate(token);
      setIsAuthenticating(true);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;