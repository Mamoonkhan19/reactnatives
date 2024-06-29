import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './screen/Detail';
import Moredetails from './screen/Moredeatails'

const Stack = createNativeStackNavigator();

export default function App() {
  const Products = () => {
    return(
      

      <Stack.Navigator>
            {/* <Stack.Screen name='ProductDetails' component={Detail}/> */}
             {/* <Stack.Screen name = 'Deat' component={Moredetails}/> */}
      </Stack.Navigator>
      
    )
    
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name='Home' component={Home}/>
    {/* <Stack.Screen name="gotodetail" component={Products}/> */}
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
