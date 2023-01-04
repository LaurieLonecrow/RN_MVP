import { StyleSheet, View, Text, Image } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from "../constants/GlobalStyles"


const productData = [
  {
    title: 'Cool Product',
    price: '$10',
    location: 'Far Far Away',
    id: 1,
  },
  {
    title: 'Another Cool Product',
    price: '$20',
    location: 'Less Far Away',
    id: 2,
  },
  {
    title: 'Cool Product',
    price: '$10',
    location: 'Far Far Away',
    id: 3,
  },
  {
    title: 'Another Cool Product',
    price: '$20',
    location: 'Less Far Away',
    id: 4,
  },
  {
    title: 'Cool Product',
    price: '$10',
    location: 'Far Far Away',
    id: 5,
  },
  {
    title: 'Another Cool Product',
    price: '$20',
    location: 'Less Far Away',
    id: 6,
  }

];

function renderProductData(itemData) {
  return (
    <View style={styles.productItem}>
      <View style={styles.innerContainer}> 
        <Image style={styles.image} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
        <Text style={styles.title}>{itemData.item.title}</Text>
        <Text>{itemData.item.price}</Text>
        <Text>{itemData.item.location}</Text>
      </View>
    </View>

  )
}
function ProductTile() {
  return (
        <FlatList 
        data={productData}
        renderItem={renderProductData}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        />
  )
}

export default ProductTile;

const styles = StyleSheet.create({
  productItem: {
      flex: 1,
      margin: 16,
      height: 200,
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
})