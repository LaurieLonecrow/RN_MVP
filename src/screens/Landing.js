import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import ProductList from '../components/ProductList';

function Landing({navigation}) {
  return (
    <View style={globalStyles.container}>
      <ProductList/>
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