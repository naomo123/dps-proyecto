import React, {useState,createContext,useEffect} from 'react';
import { StyleSheet,  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
import Inicio from './components/Inicio';
import Signup from './components/Signup';
import Login from './components/Login';
import Perfil from './components/Perfil';
import Habitaciones from './components/Habitaciones';
import TablaAgregar from './components/TablaAgregar';
import DatosOrden from './components/DatosOrden';

const Stack=createNativeStackNavigator();

export const RoomContext = React.createContext();
export const UserContext = React.createContext();

export default function App() {
  const [user1,setUser1]=useState({
    name:"",
    email:"",
    state:false
  });
  console.log(user1);


  return (
    <UserContext.Provider value={[user1,setUser1]}>
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
 <Stack.Screen
          options={{headerShown:false}}
         name="TablaAgregar"
         component={TablaAgregar}
         />

<Stack.Screen
          options={{headerShown:false}}
         name="DatosOrden"
         component={DatosOrden}
         />
         
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
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
