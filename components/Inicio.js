import { useNavigation } from '@react-navigation/core';
import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

import img from '../assets/FONDO.jpg';
import img2 from '../assets/fondo3.jpg';


const Inicio = () => {
    const window = useWindowDimensions();
    let imagen;
    const navigation = useNavigation("")
    
    if (window.width >= 621) {
      imagen = img2;
    } else {
      imagen = img;
    }
  
    
  
  
    return (
      <View style={styles.container}>
        <ImageBackground source={imagen} style={styles.image}>
          <Text style={styles.text}>OLYMPUS RESORT</Text>
          
            <TouchableOpacity
          style={styles.btnAbout}
          onPress={() => {Alert.alert('Por el momento trabajamos en ello')}}  >
          <Text style={styles.textoBotones}>About us</Text>
        </TouchableOpacity>
          
        </ImageBackground>
  
        <View style={styles.card}>
          <View style={styles.fixToText}>
         
          <TouchableOpacity style={[styles.btnLogin]} 
          
          onPress={() => {

            navigation.navigate('Login')
                
            
          }} 
           >

            <Text style={styles.textoBotones}>Log in</Text>
           </TouchableOpacity>
              
           <TouchableOpacity style={[styles.btnSingup]}  onPress={() => {

            navigation.navigate('Signup')
    

                }} 
           >

            <Text style={styles.textoBotones}>Sing Up</Text>
           </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    image: {
      flex: 1,
      justifyContent: 'center',
      resizeMode: 'stretch',
      alignItems: 'center',
      backgroundColor: 'rgba(1,1,1,0.5)',
    },
    card: {
      height: 50,
      justifyContent: 'center',
      margin: 20,
    },
  
    btnAbout: {
      margin: 10,
      height: 50,
      width: 130,
      backgroundColor: 'rgba(168, 140, 81 , 0.6)',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: 20,
    },
    fixToText: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 15,
    },
    btnLogin: {
      margin: 10,
      backgroundColor: 'rgb(255,255,255)',
      borderWidth: 2,
        width: 120,
        height:40,
      justifyContent:'center',
      borderColor: '#20232a',
      borderRadius: 6,
    },
    btnSingup: {
      margin: 10,
      backgroundColor: 'rgb(168, 140, 81)',
      borderWidth: 2,
          width: 120,
        height:40,
      justifyContent:'center',
      borderColor: 'rgb(168, 140, 81)',
      borderRadius: 6,
    },
    textoBotones: {
      textAlign: 'center',
        fontFamily: 'monospace',
        fontSize:20,
    },
    text: {
      color: 'white',
      fontSize: 42,
      marginTop:40,
      fontFamily: 'monospace',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  export default Inicio;