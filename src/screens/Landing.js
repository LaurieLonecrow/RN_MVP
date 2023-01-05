import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import ProductTile from '../components/ProductTile';

function Landing({navigation}) {
  return (
    <View style={globalStyles.container}>
      <ProductTile/>
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