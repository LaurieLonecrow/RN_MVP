import Landing from './src/screens/Landing';
import { StyleSheet, View } from 'react-native';
import { globalStyles } from './src/constants/GlobalStyles';
import GlobalColorOptions from './src/components/GlobalColorOptions'

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Landing />
      <GlobalColorOptions></GlobalColorOptions>
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
