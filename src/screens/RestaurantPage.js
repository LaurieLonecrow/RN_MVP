import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import Button from '../components/Button';

function ProductPage({route}) {
  const [productImages, setProductImages] = useState([])

  const selectedProduct = route.params.product;
console.log(selectedProduct)
  function presshandler() {
    console.log('pressed');
  }
  

  return (<>

    <View style={globalStyles.container}>
      <ScrollView>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri:selectedProduct.image_url}} />
      </View>
        <View style={styles.container}>
          <Text style={styles.title}>{selectedProduct.name}</Text>
          <Text style={styles.subTitle}>{selectedProduct.location.address1}</Text>
          <Text style={styles.price}>{selectedProduct.rating}</Text>
        </View>
        <Button onPress={presshandler} text={'Add to Favorites'} backgroundColor={'blue'} color={'white'}/>
        <Button onPress={presshandler} text={'Purchase'} backgroundColor={'lightblue'} color={'black'}/>
      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 250,
  },
  imageContainer:{
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'black',
  },
  subTitle: {
    fontSize: 20,
    margin: 8,
    textAlign: 'left',
    color: 'black',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'black',
  },
});


export default ProductPage;


