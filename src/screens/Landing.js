import { Pressable, StyleSheet, Text, View } from 'react-native';
import ImagePicker from '../components/ImagePicker';
import { globalStyles } from '../constants/GlobalStyles';


function Landing({navigation}) {
  

  return (
    <View style={globalStyles.container}>
      <ImagePicker />
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