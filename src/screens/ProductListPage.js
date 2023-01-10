import { StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import ProductListTile from '../components/ProductListTile';
import LoadingOverlay from "../components/LoadingOverlay";
import getProducts from "../api/productsApi";

function ProductListPage({navigation}) {
  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(true);

  function pressHandler() {
    navigation.navigate('ProductPage')
  }

  function renderProductData(itemData) {
    return (
      <ProductListTile 
      source={{uri:itemData.item.images[1]}}
      title={itemData.item.title}
      price={itemData.item.price}
      onPress={pressHandler}
      />
    )
  };

  const fetchProductsData = async () => {
    const data = await getProducts();
    setProductsData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);
  
  return (
    <View style={globalStyles.container}>
      {loading && <LoadingOverlay message="Loading your products..." /> }
      {productsData && ( 
        <FlatList 
        data={productsData}
        renderItem={renderProductData}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        />
      )}
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

export default ProductListPage;