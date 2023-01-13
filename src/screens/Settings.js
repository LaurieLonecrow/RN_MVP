import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import Map from '../components/Map';

function Settings() {
  return (
    <View style={globalStyles.container}>
        <Map/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Settings;