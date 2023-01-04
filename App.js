import Landing from './src/screens/Landing';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from './src/constants/GlobalStyles';

import ProductPage from './src/screens/ProductPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={globalStyles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Landing}/>
        <Stack.Screen name="ProductPage" component={ProductPage}/>
      </Stack.Navigator>
    </NavigationContainer>
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
