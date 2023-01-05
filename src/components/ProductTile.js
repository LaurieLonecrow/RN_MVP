import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import getProducts from "../api/productsApi";

function renderProductData(itemData) {
  return (
    <View style={styles.productItem}>
      <View style={styles.innerContainer}> 
        <Image style={styles.image} source={{uri:itemData.item.images[0]}} />
        <Text style={styles.title}>{itemData.item.title}</Text>
        <Text>${itemData.item.price}.00</Text>
        <Text>{itemData.item.description}</Text>
      </View>
    </View>

  )
};

function ProductTile() {
  const [ productsData, setProductsData ] = useState([])
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
    height: 250,
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
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProductTile;