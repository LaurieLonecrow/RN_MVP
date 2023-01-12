import { Pressable, StyleSheet, Text, View } from 'react-native';
import ImagePicker from '../components/ImagePicker';
import Map from '../components/Map';
import { globalStyles } from '../constants/GlobalStyles';


function Landing({navigation}) {
  

  return (
    <View style={globalStyles.container}>
      <ImagePicker />
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Landing;