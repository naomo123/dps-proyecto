import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import CustomAlert from './CustomAlert';
const DatosOrden = ({route}) => {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  const [fecha, setFecha] = useState("");
  const [cvv, setCvv] = useState("");
  const [postal, setPostal] = useState("");
  const [showModal, setShowModal] = useState(false);
  function checkTextInput () {
    if (!nombre.trim()) {
      alert('Please enter your full name');
      return;
    }
    if (!direccion.trim()) {
      alert('Please enter your address');
      return;
    }
    if (!telefono.trim()) {
      alert('Please enter your phone number ');
      return;
    }
    if (!tarjeta.trim()) {
      alert('Please enter your credit or debit card');
      return;
    }
    if (!fecha.trim()) {
      alert('Please enter the date as MM / YYYY');
      return;
    }
    if (!cvv.trim()) {
      alert('Please enter your security code');
      return;
    }
    if (!postal.trim()) {
      alert('Please enter your security code');
      return;
    }
  }
  return (
    <>
      <View style={styles.content}>
      <CustomAlert
        displayMode={'success'}
        displayMsg={'Orden Pagada'}
        visibility={showModal}
        dismissAlert={setShowModal}
      />
        <View style={styles.content2}>
          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Habitaciones");
              }}
            >
              <AntDesign name="arrowleft" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.titulo}>Total to pay: ${route.params.total}</Text>
            <Text style={styles.titulo}>Order Data</Text>
            <TextInput
              style={styles.input}
              placeholder="FULL NAME"
              value={nombre}
              onChangeText={(text) => setNombre(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="DIRECTION"
              value={direccion}
              onChangeText={(text) => setDireccion(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="TELEPHONE"
              value={telefono}
              onChangeText={(text) => setTelefono(text)}
            />
            <Card containerstyle={styles.card}>
              <Text style={styles.input2}>NOMBRE DE LA TARJETA</Text>
              <TextInput
                style={styles.input2}
                placeholder="Card number"
                value={tarjeta}
                onChangeText={(text) => setTarjeta(text)}
              />
              <TextInput
                style={styles.input2}
                placeholder="MM/YYYY"
                value={fecha}
                onChangeText={(text) => setFecha(text)}
              />
              <TextInput
                style={styles.input2}
                placeholder="Security code /CVV"
                value={cvv}
                onChangeText={(text) => setCvv(text)}
              />
              <TextInput
                style={styles.input2}
                placeholder="Postal Code"
                value={postal}
                onChangeText={(text) => setPostal(text)}
              />
            </Card>
            <View style={styles.pie}>
            <TouchableOpacity style={[styles.boton]} onPress={() => {checkTextInput(); setShowModal(true);}}>
              <Text style={styles.texto}>COMPLETE PROCESS</Text>
            </TouchableOpacity>
            </View>

          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 7,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    textAlign: 'center',
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "space-between",
  },
  content2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0D6D6",
  },
  icon: {
    fontSize: 35,
    color: "#6e5535",
  },
  titulo: {

    marginBottom: 5,
    fontFamily: "monospace",
    fontSize: 32,
    color: "#6e5535",
    textAlign: "center",
  },
  input: {
    fontFamily: "monospace",
    fontSize: 15,
    padding: 7,
    height: 50,
    width: 300,
    borderRadius: 5,
    marginBottom: 15,
    borderBottomWidth: 1,
  },
  pie: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input2: {
    fontFamily: "monospace",
    fontSize: 15,
    padding: 5,
    height: 50,
    width: 275,
    borderRadius: 5,
    marginBottom: 25,
    borderBottomWidth: 1,
  },
  boton: {
    backgroundColor: "rgb(168, 140, 81)",
    width: 300,
    height: 40,
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
   
    padding: 5,
  },
  texto: {
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: 20,
  },
});
export default DatosOrden;


