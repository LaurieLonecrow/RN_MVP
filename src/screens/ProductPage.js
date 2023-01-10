import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import Button from '../components/Button';

function ProductPage({route}) {
  const [productImages, setProductImages] = useState([])

  const selectedProduct = route.params.product;

  function presshandler() {
    console.log('pressed');
  }
  
  function renderImageItems(itemData) {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri:itemData.item}} />
      </View>
      )
  }

  function getProductImages() {
      setProductImages(selectedProduct.images)
  } 
    
  useEffect(()=>{
    getProductImages();
  })

  return (<>
  
    <View style={globalStyles.container}>
      <FlatList 
      horizontal={true}
      data={productImages}
      renderItem={renderImageItems}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{selectedProduct.title}</Text>
          <Text style={styles.subTitle}>{selectedProduct.description}</Text>
          <Text style={styles.price}>${selectedProduct.price}.00</Text>
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
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  imageContainer:{
    flex: 1,
    marginLeft: 15,
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
    fontSize: 14,
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


