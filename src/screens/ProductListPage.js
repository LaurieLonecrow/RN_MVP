import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import ProductListTile from '../components/ProductListTile';
import LoadingOverlay from "../components/LoadingOverlay";

import { getProducts } from "../api/productsApi";
import { getUsers } from "../api/productsApi";

function ProductListPage({navigation}) {
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([])

  const fetchProductsData = async () => {
    const data = await getUsers();
    setProductsData(data);
    setLoading(false);
  };

  
  function renderProductData(itemData) {
    function pressHandler() {
      navigation.navigate('ProductPage', {
        product: itemData.item,
      })
    }
    return (
      <ProductListTile 
      source={{uri:itemData.item.image}}
      firstName={itemData.item.firstName}
      lastName={itemData.item.lastName}
      address={`${itemData.item.address.city},${itemData.item.address.state}`}
      role={itemData.item.role}
      onPress={pressHandler}
      />
    )
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