import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import ListTile from '../components/ListTile';
import LoadingOverlay from "../components/LoadingOverlay";

import getlocalRestaurants from "../api/yelpApi";
import { getCurrentLocation } from '../util/helpers/getLocation';

function ListPage({navigation}) {
  const [loading, setLoading] = useState(true);
  const [restaurantData, setRestaurantData] = useState([])
  
  
  const fetchRestaurantData = async (lat, lng) => {
      try {
        const data = await getlocalRestaurants(lat,lng);
        setRestaurantData(data);
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
  };

  function renderRestaurantData(itemData) {
    function pressHandler() {
      navigation.navigate('RestaurantPage', {
        restaurant: itemData.item,
      })
    }
    function getCategories(categories){
      let array = [];
      let values;
      categories.map(cat => {
        values = Object.keys(cat).map(key => cat[key])
        array.push(values[1])
      })
      return array    
      }
   

    return (
      <ListTile 
      source={{uri:itemData.item.image_url}}
      title={itemData.item.name}
      categories={getCategories(itemData.item.categories)}
      distance={itemData.item.distance}
      stars={itemData.item.rating}
      dollars={itemData.item.price}
      onPress={pressHandler}
      />
    )
  };

  useEffect(() => {
    (async () => {
      const current = await getCurrentLocation();
      await fetchRestaurantData(current.coords.latitude, current.coords.longitude);
    })();
  }, []);

  
  return (
    <View style={globalStyles.container}>
      {loading && <LoadingOverlay message="Loading local restaurants..." /> }
      {restaurantData && ( 
        <FlatList 
        data={restaurantData}
        renderItem={renderRestaurantData}
        keyExtractor={(item)=>item.id}
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

export default ListPage;