import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';

function Landing({navigation}) {
  return (
    <View style={globalStyles.container}>
     <View style={styles.container}>
      <Text>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Landing;