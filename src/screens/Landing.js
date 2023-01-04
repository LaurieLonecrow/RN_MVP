import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';

function Landing({navigation}) {
  // function navigateHandler() {
  //   navigation.navigate('Splash')
  // }
  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
      <Text>Deejay, look!</Text>
      <Text>Our very first</Text>
      <Text>REACT NATIVE MVP</Text>
      </View>
      {/* <Pressable style={styles.button}
        android_ripple={{ color: '#ccc' }}
        onPress={navigateHandler}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Global Colors</Text>
        </View>      
      </Pressable>  */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: .1,
    margin: 16,
    height: 50,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: globalStyles.colors.accent500,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Landing;