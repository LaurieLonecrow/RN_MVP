import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import { getStarRating, getDollarSigns } from '../util/helpers/getRatings';
import Button from '../components/Button';

function RestaurantPage({route}) {
  const selectedRestaurant = route.params.restaurant;
  console.log(selectedRestaurant)
  const [starsArray, setStarsArray] = useState([]);

  function presshandler() {
    console.log('pressed');
  }
  
  useEffect(()=> {
    setStarsArray(getStarRating(selectedRestaurant.rating));
  },[])

  return (
    <>
    <View style={globalStyles.container}>
      <ScrollView>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri:selectedRestaurant.image_url}} />
      </View>
        <View style={styles.container}>
          <Text style={styles.title}>{selectedRestaurant.name}</Text>
          <Text style={styles.subTitle}>{selectedRestaurant.location.address1}</Text>
          <View style={styles.starsContainer}>{starsArray}</View>
          <View style={styles.priceContainer}>{getDollarSigns(selectedRestaurant.price)}</View>          
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
  starsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
});


export default RestaurantPage;


