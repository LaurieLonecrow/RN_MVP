import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Landing() {
  return (
    <View style={styles.container}>
      <Text>Deejay, look!</Text>
      <Text>Our very first</Text>
      <Text>REACT NATIVE MVP</Text>
      <StatusBar style="auto" />
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
});

export default Landing;