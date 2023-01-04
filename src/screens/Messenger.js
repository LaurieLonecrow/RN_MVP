import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';

function Messenger() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
      <Text>Messenger</Text>
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
});

export default Messenger;