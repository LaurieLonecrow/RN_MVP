import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import LoadingOverlay from './LoadingOverlay';
import { getCurrentLocation } from '../util/helpers/getLocation';

function Map() {
  const [location, setLocation] = useState();

  useEffect(() => {
    (async () => {
      const current = await getCurrentLocation();
    setLocation({
      lat: current.coords.latitude,
      lng: current.coords.longitude,
    })    
    })();
  }, []);

    let locationPreview = <LoadingOverlay message={"Finding your current location..."}/>
    if (location) {
      const region = {
        latitude: location.lat, 
        longitude: location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      locationPreview = 
      <MapView style={styles.map} initialRegion={region}>
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: location.lat, 
            longitude: location.lng,
          }}
        />
        </MapView>;
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