import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import LoadingOverlay from './LoadingOverlay';

function Map() {
  const [location, setLocation] = useState(null);

    useEffect(() => {
      (async () => {
        let { status } = await requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await getCurrentPositionAsync({});
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        });
      })();
    }, [location]);

    let locationPreview = <LoadingOverlay message={"Finding your current location..."}/>
    if (location) {
      const region = {
        latitude: location.lat, 
        longitude: location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      locationPreview = <MapView style={styles.map} initialRegion={region}></MapView>;
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