import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useCallback, useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { globalStyles } from './src/constants/GlobalStyles';
import AuthContextProvider, { AuthContext } from './src/store/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

import Button from './src/components/Button';

import Landing from './src/screens/Landing';
import Authentication from './src/screens/Authentication'
import ProductListPage from './src/screens/ProductListPage';
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
  const authCtx = useContext(AuthContext);

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="LogOut"
          onPress={authCtx.logout}
        />
      </DrawerContentScrollView>
    );
  }
  
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: globalStyles.container.backgroundColor },
        headerTintColor: 'black',
        sceneContainerStyle: { backgroundColor: globalStyles.container.backgroundColor },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="ProductListPage" component={ProductListPage} options={{title:'', drawerLabel: 'Products',}} />
      <Drawer.Screen name="ProductUpload" component={ProductUpload}  options={{title:'',drawerLabel: 'Product Upload',}}/>
      <Drawer.Screen name="Settings" component={Settings}  options={{title:'',drawerLabel: 'Settings',}}/>
      <Drawer.Screen name="Messenger" component={Messenger}  options={{title:'',drawerLabel: 'Messenger',}}/>
      <Drawer.Screen name="Landing" component={Landing} options={{title:'', drawerLabel: 'Landing',}} />
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
      <Stack.Screen name="ProductListPage" component={ProductListPage} options={{title:''}}/>
      <Stack.Screen name="ProductPage" component={ProductPage} options={{title:''}}/>
    </Stack.Navigator>
  );
}

function Navigation({onReady}) {
  const authCtx = useContext(AuthContext);
  
  return ( 
    <NavigationContainer 
    style={globalStyles.container}
    onReady={onReady}>
    {!authCtx.isAuthenticated && <AuthStack />}
    {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
    );
}

function Root() {
  const [appIsLoading, setAppIsLoading]=useState(true)

  const authCtx = useContext(AuthContext);
  useEffect(()=> {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');
    
      if (storedToken) {
        authCtx.authenticate(storedToken)
      }
      setAppIsLoading(false)
    }
    fetchToken();
  }, [])

    if(!appIsLoading) {
      SplashScreen.hideAsync();
    }

  return <Navigation/>
};

SplashScreen.preventAutoHideAsync(); 
// called in globalScope to make sure it runs

export default function App() {
  return (
    <AuthContextProvider>
      <StatusBar style="auto" />
      <Root/>
    </AuthContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
