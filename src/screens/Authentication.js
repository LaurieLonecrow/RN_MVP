import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';

import SignInButton from '../components/Button';

function Authentication() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
      <Text style={styles.header}>Start your journey</Text>
      <Text style={styles.subHeader}>Create your new Account to subscribe to news, fresh realeases, and more...</Text>
        <View style={styles.buttonContainer}>
        <SignInButton text='Sign in with Apple' onPress={()=>console.log('Pressed Apple')} backgroundColor={globalStyles.colors.primary400} icon="ios-lock-closed-outline" color='white'/>
        <SignInButton text='Sign in with Facebook' onPress={()=>console.log('Pressed Facebook')} backgroundColor={globalStyles.colors.primary500} icon="logo-facebook" color='white'/>
        <SignInButton text='Sign in with Twitter' onPress={()=>console.log('Pressed Twitter')} backgroundColor={globalStyles.colors.primary200} icon="logo-twitter" color='white'/>
        <SignInButton text='Sign in or register with Email' onPress={()=>console.log('Pressed Email')} color={globalStyles.colors.primary500}/>
        </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 24,
    },
  subHeader: {
    fontSize: 14,
    marginBottom: 24,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
  }
});

export default Authentication;