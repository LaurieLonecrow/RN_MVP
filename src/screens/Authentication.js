import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';

function Authentication() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
      <Text style={styles.header}>Start your journey</Text>
      <Text style={styles.subHeader}>Create your new Account to subscribe to news, fresh realeases, and more...</Text>
      <Pressable
        style={styles.button}
        onPress={() => console.log('Button pressed')}>
          <View style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </View>
        </Pressable>
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
  button: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    color: 'white',
    backgroundColor: globalStyles.colors.primary400,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }

});

export default Authentication;