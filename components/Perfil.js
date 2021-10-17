
import {View, Text, StyleSheet, TouchableOpacity,ImageBackground, } from "react-native";
import React  from 'react';
import {auth} from './firebase'
import { FontAwesome5 } from '@expo/vector-icons';
import img3 from '../assets/fondo2.png';
import { useNavigation } from "@react-navigation/core";
const Perfil = () => {

const navigation = useNavigation()

const handleSingOut = () =>{
    auth
    .signOut()
    .then(() =>
    {
        navigation.navigate("Inicio")

    })
    .catch(error => alert(error.message))
}

    return(
        <>
          
        <View style={styles.content}>
        <ImageBackground source={img3} style={styles.image}>
     
            <View style={styles.card}>
            <FontAwesome5 name="user-alt"  style={styles.icon}   color="black" />
         
            <Text style={styles.titulo}>{auth.currentUser?.email} </Text>
            <TouchableOpacity style={[styles.boton]}
            onPress={handleSingOut}
            >
            
            <Text style={styles.texto}>Sign Out</Text>
       
             </TouchableOpacity>
      

            <TouchableOpacity
            style={[styles.boton]}
            onPress={()=>{navigation.navigate('Habitaciones')}}
            >
               <Text style={styles.texto}>Habitaciones</Text>
       
          </TouchableOpacity>
          </View>
          </ImageBackground>
         
         
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        margin:5,
        justifyContent:'center',
        alignItems:'center'
       
      },
      image: {
        
      
        resizeMode: 'contain',
       width:'80%',
       position:'absolute',
       justifyContent:'center',



      },
      card:{

        borderColor:'gray',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        height:680,
       textAlign:'center',
       backgroundColor: 'rgba(139, 110, 49 ,0.4)',

      },
      
      icon:{
          fontSize: 90,
          color: '#6e5535',
          
      },
      icon2:{
        fontSize: 60,
        
    },
      titulo: {
        marginTop: 20,
        marginBottom:40,
        fontFamily: 'monospace',
        fontSize: 28,
        margin:5,
        color: '#6e5535',
        textAlign: 'center',
      },
      boton: {
       
        backgroundColor: 'rgb(168, 140, 81)',
        margin:15,
        width: '60%',
          height:40,
        justifyContent:'center',
        borderRadius: 5,
        justifyContent: 'center',
      },
      texto: {
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize:20,
      },
});

export  default Perfil;