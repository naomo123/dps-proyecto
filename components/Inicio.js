import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import img from "../assets/FONDO.jpg";
import img2 from "../assets/fondo3.jpg";
import fondonegro from "../assets/fondonegro.jpg"
import Modal from "./Modal";

const Inicio = () => {
  const window = useWindowDimensions();
  let imagen;
  const navigation = useNavigation("");

  if (window.width >= 621) {
    imagen = img2;
  } else {
    imagen = img;
  }

  const [informacion, setinformacion] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={imagen} style={styles.image}>
          <Text style={styles.text}>OLYMPUS RESORT</Text>

          <View style={styles.grid}>
            <TouchableOpacity
              style={styles.btnAbout}
              onPress={() => setinformacion(true)}
            >
              <Text style={styles.textoBotones}>About us</Text>
            </TouchableOpacity>

            <Modal visible={informacion} onClose={() => setinformacion(false)}>
              <ImageBackground
                source={fondonegro}
                style={{
                  resizeMode: "contain",
                  width: 345,
                  height: "95%",
                }}
              >
                <ScrollView>
                  <Text style={styles.titulocat}>¿QUIÉNES SOMOS?</Text>
                  <Text style={styles.titulocat}>
                   MISIÓN
                  </Text>
                  <Text style={styles.textocat}>
                    Brindar un servicio hotelero de excelencia, ofreciendo a
                    nuestros huéspedes hospitalidad, mediante un trato
                    individualizado por un personal altamente motivado, buscando
                    superar las expectativas de nuestros visitantes.
                  </Text>
                  <Text style={styles.titulocat}>
                    VISIÓN
                  </Text>
                  <Text style={styles.textocat}>
                    Si busca hoteles superiores, nuestro hotel de muestra es el
                    lugar perfecto para comenzar su búsqueda. Nuestro hotel de
                    muestra de lujo combina la modernidad actual con la
                    elegancia clásica. Disfrutará de la comodidad de las
                    habitaciones y suites recientemente rediseñadas, un gimnasio
                    de servicio completo, una piscina, un gran restaurante y
                    algunos de los mejores bares y salones para celebrar y
                    entretener con un estilo sofisticado.
                  </Text>
                  </ScrollView>
              </ImageBackground>
            </Modal>
          </View>
        </ImageBackground>

        <View style={styles.card}>
          <View style={styles.fixToText}>
            <TouchableOpacity
              style={[styles.btnLogin]}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.textoBotones}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btnSingup]}
              onPress={() => {
                navigation.navigate("Signup");
              }}
            >
              <Text style={styles.textoBotones}>Sing Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: "ivory",
  },

  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "stretch",
    alignItems: "center",
    backgroundColor: "rgba(1,1,1,0.5)",
  },
  card: {
    height: 50,
    justifyContent: "center",
    margin: 20,
  },

  btnAbout: {
    margin: 10,
    height: 50,
    width: 130,
    backgroundColor: "rgba(168, 140, 81 , 0.6)",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 20,
  },
  fixToText: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    margin: 15,
  },
  btnLogin: {
    margin: 10,
    backgroundColor: "rgb(255,255,255)",
    borderWidth: 2,
    width: 120,
    height: 40,
    justifyContent: "center",
    borderColor: "#20232a",
    borderRadius: 6,
  },
  btnSingup: {
    margin: 10,
    backgroundColor: "rgb(168, 140, 81)",
    borderWidth: 2,
    width: 120,
    height: 40,
    justifyContent: "center",
    borderColor: "rgb(168, 140, 81)",
    borderRadius: 6,
  },
  textoBotones: {
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: 20,
  },
  text: {
    color: "white",
    fontSize: 42,
    marginTop: 40,
    fontFamily: "monospace",
    fontWeight: "bold",
    textAlign: "center",
  },
  textocat: {
    color: "white",
    fontFamily: "monospace",
    fontSize: 14,
    margin: 10,
    textAlign: "center",
    padding: 2,
  },
  titulocat: {
    color: "white",
    fontFamily: "monospace",
    fontSize: 18,
    margin: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "space-between",
    alignItems: "center",
  },
});
export default Inicio;
