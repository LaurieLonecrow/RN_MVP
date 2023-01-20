import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';

function Splash() {
  return (
    <View style={globalStyles.container}>
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

export default Splash;