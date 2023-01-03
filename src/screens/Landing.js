import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';

function Landing() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
      <Text>Deejay, look!</Text>
      <Text>Our very first</Text>
      <Text>REACT NATIVE MVP</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: globalStyles.colors.primary500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Landing;