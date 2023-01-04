import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import GlobalColorOptions from '../components/GlobalColorOptions'

function ProductPage() {
  return (
    <View style={globalStyles.container}>
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