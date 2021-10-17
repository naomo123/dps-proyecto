

// Importing combination
import React from 'react';
import { StyleSheet,  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
    
import Inicio from './components/Inicio';
import Signup from './components/Signup';
import Login from './components/Login';
import Perfil from './components/Perfil';
import Habitaciones from './components/Habitaciones';

const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          options={{headerShown:false}}
         name="Inicio"
         component={Inicio}
         />
      <Stack.Screen
      
      options={{headerShown:false}}
        name="Signup"
        component={Signup}
        />
       
        <Stack.Screen
          options={{headerShown:false}}
         name="Login"
         component={Login}
         />
          <Stack.Screen
          options={{headerShown:false}}
         name="Perfil"
         component={Perfil}
         />
 <Stack.Screen
          options={{headerShown:false}}
         name="Habitaciones"
         component={Habitaciones}
         />


         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor:'#fff',
    alignContent:'center'
  },
});
