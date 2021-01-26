import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import Page1 from './src/Page1';
import Ncdm from './src/Ncdm';
import Evtc from './src/Evtc';
import Hnvc from './src/Hnvc';
import Vlm from './src/Vlm';
import Vlom from './src/Vlom';
import Vpim from './src/Vpim';
import Vrom from './src/Vrom';
import Tcom from './src/Tcom';

const Stack = createStackNavigator()

export default function App() {
  return (
            
 <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen name= 'Home' component = {Page1}/>
     <Stack.Screen name= 'Evtc' component = {Evtc}/>
     <Stack.Screen name= 'Ncdm' component = {Ncdm}/>
     <Stack.Screen name= 'Hnvc' component = {Hnvc}/>
     <Stack.Screen name= 'Vlm' component = {Vlm}/>
     <Stack.Screen name= 'Vlom' component = {Vlom}/>
     <Stack.Screen name= 'Vpim' component = {Vpim}/>
     <Stack.Screen name= 'Vrom' component = {Vrom}/>
     <Stack.Screen name= 'Tcom' component = {Tcom}/>
   </Stack.Navigator>
 </NavigationContainer>
   
      
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 0.2, 
//     margin: 10,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//   },
// });
