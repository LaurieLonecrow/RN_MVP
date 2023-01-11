import { useState } from "react";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions,
  PermissionStatus,
  MediaTypeOptions
} from 'expo-image-picker';
import { View, Image, Text, StyleSheet } from "react-native";
import { globalStyles } from '../constants/GlobalStyles';
import Button from './Button';


function ImagePicker() {
const [cameraImage, setCameraImage] = useState(null);
const [rollImage, setRollImage] = useState(null);
const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app.'
      );
      return false;
    }
    return true;
  }

  async function getRollImage() {
    let image = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (image) {
      setRollImage(image.assets[0].uri);
    }
  };

  async function getCameraImage(){
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (image) {
      setCameraImage(image.assets[0].uri);
    }
  };

  let imagePreview = <Text>No image taken yet.</Text>;
  if (cameraImage) {
    imagePreview = <Image style={styles.image} source={{ uri:cameraImage }}/>;
  }
  if (rollImage) {
    imagePreview = <Image style={styles.image} source={{ uri:rollImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
        <Button text="Take a pic" onPress={getCameraImage} color="black"/>
        <Button text="Choose a pic" onPress={getRollImage} color="black"/>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalStyles.colors.primary100,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 200,
  },
});