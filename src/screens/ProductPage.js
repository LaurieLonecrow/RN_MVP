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
  
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <View style={styles.header}>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{uri:selectedProduct.image}} style={styles.image} />
          <Text style={styles.name}>{selectedProduct.firstName} {selectedProduct.lastName}</Text>
          <Text style={styles.location}>{selectedProduct.address.city}, {selectedProduct.address.state} USA</Text>
        </View>
        <View style={styles.button}>
          <Image source={require('../../assets/portfolio.png')} style={styles.icon} />
          <Text>{selectedProduct.role}</Text>
        </View>
        <View style={styles.button}>
          <Image source={require('../../assets/email.png')} style={styles.icon} />
          <Text>Message</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{ 
    flex: 1,
    backgroundColor: 'black',
    width: 400, 
    height: 140,
  },
  image: { 
    width: 140, 
    height: 140, 
    borderRadius: 100, 
    marginTop: -70
  },
  imageContainer: {
    alignItems: 'center', 
    marginBottom:20
  },
  name: { 
    fontSize:25, 
    fibtWeight:'bold', 
    padding:10
  },
  location: { 
    fontSize:15, 
    fibtWeight:'bold', 
    color:'grey'
  },
  button: { 
    alignSelf:'center', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems:'center', 
    backgroundColor: '#fff', 
    width: '90%', 
    padding:20, 
    paddingBottom: 22, 
    borderRadius: 10, 
    shadowOpacity:80, 
    elevation:15, 
    marginTop:20
  },
  icon: {
    width:20, 
    height:20, 
    marginRight:15
  },
});


export default ProductPage;


