import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import ProductList from '../components/ProductListTile';

function ProductPage() {
  return (
    <View style={globalStyles.container}>
            <Text>A Product</Text>
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