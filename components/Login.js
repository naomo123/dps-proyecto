
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from 'react';
import { Card} from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { auth } from "./firebase";
import { useNavigation } from "@react-navigation/core";

const Login = ()=> {

  const navigation = useNavigation("")
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

    const handleLogin = () => {
    
      auth
      .signInWithEmailAndPassword(email,password)
      .then(userCredentials => {
         const user = userCredentials.user;
         console.log('Logged in with: ',user.email);
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
        
    
            <Text style={styles.titulo}>Iniciar sesión</Text>
         
           
            <TextInput style={styles.input} placeholder="Username" 
            value={email}
           onChangeText={text => setEmail(text)}  
            
            />
    
            <TextInput secureTextEntry={true} 
             placeholder="Password" style={styles.input}
             value={password}
            onChangeText={text => setPassword(text)}  
            
             />
            <TouchableOpacity style={[styles.boton]}
            
             
          onPress={handleLogin}
            >
            
                <Text style={styles.texto}>Log in</Text>
           
            </TouchableOpacity>
          
          
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
});
export default Login;