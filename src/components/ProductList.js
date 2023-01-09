import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import getProducts from "../api/productsApi";

import LoadingOverlay from "./LoadingOverlay";

function renderProductData(itemData) {
  return (
    <View style={styles.productItem}>
      <Image style={styles.image} source={{uri:itemData.item.images[1]}} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{itemData.item.title}</Text>
          <Text>${itemData.item.price}.00</Text>
        </View>
    </View>

  )
};

function ProductList() {
  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchProductsData = async () => {
    const data = await getProducts();
    setProductsData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <> 
      {loading && <LoadingOverlay message="Loading your products..." /> }
      {productsData && ( 
        <FlatList 
        data={productsData}
        renderItem={renderProductData}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        />
      )}
    </>
  )
};

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    margin: 4,
    padding: 16,
    height: 220,
    alignItems: 'center',
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  image: {
    borderRadius: 80,
    width: 125,
    height: 125,
  },
  textContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProductList;