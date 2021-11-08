import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import { auth } from "./firebase";
import { Card } from "react-native-elements";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/core";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setconfirmPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Perfil");
      }
    });
    return unsubscribe;
  }, []);

  const handleSingup = () => {
    if (password == confirmPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user.email);
        })
        .catch((error) => alert(error.message));
    } else {
      alert(
        "registration failed, password is different from confirm password"
      );
    }
  };

  return (
    <>
      <View style={styles.content}>
        <Card containerstyle={styles.card}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Inicio");
            }}
          >
            <AntDesign name="arrowleft" style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.content2}>
            <Text style={styles.titulo}>TO REGISTER</Text>

            <TextInput
              style={styles.input}
              placeholder="Username"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Confirmar Password"
              style={styles.input}
              value={confirmPassword}
              onChangeText={(text) => setconfirmPassword(text)}
            />

            <TouchableOpacity style={[styles.boton]} onPress={handleSingup}>
              <Text style={styles.texto}>SING UP</Text>
            </TouchableOpacity>

            <Text style={{ textAlign: "justify", margin: 20 }}>
              By siging up, you agree to Photo's Terms of Service and Privacy
              Policy
            </Text>
          </View>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    margin: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
  },
  content2: {
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 35,
    color: "#6e5535",
  },
  titulo: {
    marginTop: 20,
    marginBottom: 40,
    fontFamily: "monospace",
    fontSize: 35,
    margin: 5,
    color: "#6e5535",
    textAlign: "center",
  },
  input: {
    fontFamily: "monospace",
    fontSize: 15,
    padding: 15,
    height: 50,
    width: 320,
    backgroundColor: "#d7d2d2",
    borderRadius: 5,
    marginBottom: 30,
  },
  boton: {
    backgroundColor: "rgb(168, 140, 81)",

    width: 320,
    height: 40,
    justifyContent: "center",
    borderRadius: 5,
    justifyContent: "center",
  },
  texto: {
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: 20,
  },
});
export default Signup;

  
