
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Platform} from "react-native";
import React, {useContext, useState, useEffect} from 'react';
import { Card} from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import 'firebase/app'
import { auth, provider } from "./firebase";
import { useNavigation } from "@react-navigation/core";
import {UserContext} from '../App';
const Login = (props)=> {

  const navigation = useNavigation("")
  const [user1,setUser1]=useContext(UserContext);
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        navigation.navigate('Perfil')

      }   
    } ) 
    return unsubscribe
  }, [])

  const googleLogin = (user) => {
    auth.signInWithRedirect(provider).then(result => {alert('Loginn');    
   
    var newInfo={
      state:true
  }

  setUser1(newInfo); navigation.navigate('Perfil') });
  }

  const handleLogin = () => {
  
    auth
      .signInWithEmailAndPassword(email,password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with: ',user.email);
        var newInfo={
          state:true
      }

      setUser1(newInfo);
      })
      .catch(error => alert(error.message))
  }
     
    return(
        <>
          
        <View style={styles.content}>
       
          <Card containerstyle={styles.card}>
            <TouchableOpacity 
              onPress={()=>{
                navigation.navigate('Inicio')
              }}
            >
              <AntDesign name="arrowleft"  style={styles.icon}  />
            </TouchableOpacity>
            <View style={styles.content2}>
              <Text style={styles.titulo}>Log in</Text>
              <TextInput style={styles.input} placeholder="Username" value={email} onChangeText={text => setEmail(text)} />
              <TextInput secureTextEntry={true} placeholder="Password" style={styles.input} value={password} onChangeText={text => setPassword(text)} />
              <TouchableOpacity style={[styles.boton]} onPress={handleLogin}>
                <Text style={styles.texto}>Log in</Text>
              </TouchableOpacity>
              {Platform.OS === 'web' ? (
                <TouchableOpacity style={styles.botonGoogle} onPress={googleLogin}>
                  <Text style={styles.textoGoogle}><AntDesign name="google" size={24} color="red" /> Sign In with Google</Text>
                </TouchableOpacity>
              ) : null }
              
            </View>
          </Card>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
      },
      card:{
        alignItems:'center',
      },
       content2: {
       margin:5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      icon:{
          fontSize: 35,
          color: '#6e5535',
      },
      titulo: {
        marginTop: 80,
        marginBottom:40,
        fontFamily: 'monospace',
        fontSize: 32,
        margin:5,
        color: '#6e5535',
        textAlign: 'center',
      },
      input: {
        fontFamily: 'monospace',
        fontSize: 15,
        padding: 15,
        height: 50,
        width: 320,
        backgroundColor: '#d7d2d2',
        borderRadius: 5,
        marginBottom: 30,
      },
      boton: {
        backgroundColor: 'rgb(168, 140, 81)',
        width: 320,
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

      botonGoogle: {
        marginTop: 5,
        backgroundColor: '#FFCCCC',
        width: 320,
        height:40,
        justifyContent:'center',
        borderRadius: 5,
        justifyContent: 'center',
      },
      textoGoogle: {
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize:20,
        color: 'red'
      },
});

export default Login;
