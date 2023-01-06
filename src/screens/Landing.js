import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import AuthContent from '../components/AuthContent';

function Landing({navigation}) {
  return (
    <View style={globalStyles.container}>
    <AuthContent/>
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