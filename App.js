import Landing from './src/screens/Landing';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from './src/constants/GlobalStyles';
import GlobalColorOptions from './src/components/GlobalColorOptions'

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={globalStyles.container}>
      {/* <StackActions.Navigator>
        <StackActions.Screen component={GlobalColorOptions}/>
      </StackActions.Navigator> */}
      <Landing />
      <GlobalColorOptions/>
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
