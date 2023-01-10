import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import Button from '../components/Button';

function ProductPage({route}) {
  const selectedProduct = route.params.product;

  function presshandler() {
    console.log('pressed');
  }
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri:selectedProduct.images[1]}} />
          <Text style={styles.title}>{selectedProduct.title}</Text>
          <Text style={styles.subTitle}>{selectedProduct.description}</Text>
          <Text style={styles.price}>${selectedProduct.price}.00</Text>
        </View>
        <Button onPress={presshandler} text={'Add to Favorites'} backgroundColor={'blue'} color={'white'}/>
        <Button onPress={presshandler} text={'Purchase'} backgroundColor={'lightblue'} color={'black'}/>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: 250,
    borderRadius: '50%'
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


