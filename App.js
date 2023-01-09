import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { globalStyles } from './src/constants/GlobalStyles';
import AuthContextProvider, { AuthContext } from './src/store/authContext';
import Button from './src/components/Button';

import Landing from './src/screens/Landing';
import Authentication from './src/screens/Authentication'
import ProductPage from './src/screens/ProductPage';
import Messenger from './src/screens/Messenger';
import ProductUpload from './src/screens/ProductUpload';
import Settings from './src/screens/Settings';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: globalStyles.container.backgroundColor },
        headerTintColor: 'black',
        sceneContainerStyle: { backgroundColor: globalStyles.container.backgroundColor },
      }}
    >
      <Drawer.Screen name="Splash" component={Splash} options={{title:'', drawerLabel: 'Global Colors',}} />
      <Drawer.Screen name="Landing" component={Landing}  options={{title:'Home',drawerLabel: 'Home',}}/>
      <Drawer.Screen name="ProductPage" component={ProductPage} options={{title:'', drawerLabel: 'Product Page',}} />
      <Drawer.Screen name="Messenger" component={Messenger}  options={{title:'',drawerLabel: 'Messenger',}}/>
      <Drawer.Screen name="ProductUpload" component={ProductUpload}  options={{title:'',drawerLabel: 'Product Upload',}}/>
      <Drawer.Screen name="Settings" component={Settings}  options={{title:'',drawerLabel: 'Settings',}}/>
    </Drawer.Navigator>
  );
}

function AuthStack() {
  return ( 
    <Stack.Navigator>
      <Stack.Screen name="Authentication" component={Authentication} options={{title:''}}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
        />
      <Stack.Screen name="ProductPage" component={ProductPage} />
    </Stack.Navigator>

  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return ( 
      <NavigationContainer style={globalStyles.container}>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
      </NavigationContainer>
      )
}

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar style="auto" />
      <Navigation/>
    </AuthContextProvider>
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
