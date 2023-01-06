import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import ProductList from '../components/ProductList';

function ProductPage() {
  return (
    <View style={globalStyles.container}>
      <ProductList/>
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

export default ProductPage;