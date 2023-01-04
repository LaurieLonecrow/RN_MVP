import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import GlobalColorOptions from '../components/GlobalColorOptions'

function ProductPage() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.container}>
      <Text>Product Page</Text>
      </View>
      <GlobalColorOptions/>
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