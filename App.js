import Landing from './src/screens/Landing';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { globalStyles } from './src/constants/GlobalStyles';

import Authentication from './src/screens/Authentication'
import ProductPage from './src/screens/ProductPage';
import Messenger from './src/screens/Messenger';
import ProductUpload from './src/screens/ProductUpload';
import Settings from './src/screens/Settings';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: globalStyles.container.backgroundColor },
        headerTintColor: 'black',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Drawer.Screen name="Landing" component={Landing}  options={{title:'',drawerLabel: 'Home',}}/>
      <Drawer.Screen name="Authentication" component={Authentication}  options={{title:'',drawerLabel: 'Authentication',}}/>
      <Drawer.Screen name="Messenger" component={Messenger}  options={{title:'',drawerLabel: 'Messenger',}}/>
      <Drawer.Screen name="ProductUpload" component={ProductUpload}  options={{title:'',drawerLabel: 'Product Upload',}}/>
      <Drawer.Screen name="Settings" component={Settings}  options={{title:'',drawerLabel: 'Settings',}}/>
      <Drawer.Screen name="ProductPage" component={ProductPage} options={{title:'Product Page',}} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer style={globalStyles.container}>
      <Stack.Navigator>
        <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
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
