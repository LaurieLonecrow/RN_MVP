import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import LoadingOverlay from './LoadingOverlay';
import { getCurrentLocation } from '../util/helpers/getLocation';

import { getUsers } from '../api/productsApi';


function Map() {
  const [ userlocations, setUserLocations ] = useState();
  const { location } = getCurrentLocation();

  async function getUserLocations() {
    const userlocations = await getUsers();
    const locationsArray = userlocations.map(each => ({"name": `${each.firstName} ${each.lastName}`, "location": each.location, "id": each.id}));
    setUserLocations(locationsArray);
  }

  useEffect(() => {
  getUserLocations()
   },[]);

    let locationPreview = <LoadingOverlay message={"Finding your people..."}/>
    if (location && userlocations) {
      const region = {
        latitude: location.lat, 
        longitude: location.lng,
        latitudeDelta: 12,
        longitudeDelta: 1,
      };
    locationPreview = 
      <MapView style={styles.map} initialRegion={region}>
        <Marker
          title="You are Here"
          coordinate={{
            latitude: location.lat, 
            longitude: location.lng,
          }}
        />
          {userlocations.map((item) => {
            return (
               <Marker 
                   key={item.id}
                   coordinate={{
                       latitude: item.location.latitude,
                       longitude: item.location.longitude,
                   }}
                   title={item.name}
              />
            )
        })}
      </MapView>
    }
    
  return (
    <View style={styles.container}>
    {locationPreview}
    </View>
  )
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  waitingText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
  },
});