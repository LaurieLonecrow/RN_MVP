import AsyncStorage from '@react-native-async-storage/async-storage';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { Alert } from 'react-native';

export const getCurrentLocation = async() => {
  let { status } = await requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Permission to access location was denied');
    return;
  }
  const location = await getCurrentPositionAsync({});
  return location;
}