import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';

import SignInButton from '../components/Button';

function Authentication({navigation}) {
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
      <Text style={styles.header}>Start your journey</Text>
      <Text style={styles.subHeader}>Create your new Account to subscribe to news, fresh realeases, and more...</Text>
        <View style={styles.buttonContainer}>
        <SignInButton text='Sign in with Apple' onPress={()=>console.log('Pressed Apple')} backgroundColor={'lightgrey'} icon="ios-lock-closed-outline" color='black'/>
        <SignInButton text='Sign in with Facebook' onPress={()=>console.log('Pressed Facebook')} backgroundColor={'lightgrey'} icon="logo-facebook" color='black'/>
        <SignInButton text='Sign in with Twitter' onPress={()=>console.log('Pressed Twitter')} backgroundColor={'lightgrey'} icon="logo-twitter" color='black'/>
        <SignInButton text='Sign in or register with Email' onPress={()=>navigation.navigate('Login')} color={'black'}/>
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