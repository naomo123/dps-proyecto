import React, { useState, useRef } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import DataBase from "./DataBase";
import Carousel from "react-native-anchor-carousel";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import Modal from "./Modal";
import hab1 from "../assets/h1.jpg";
import hab2 from "../assets/h2.jpg";
import hab3 from "../assets/h3.jpg";
import hab4 from "../assets/h4.jpg";
import hab5 from "../assets/h5.jpg";
import hab6 from "../assets/h6.jpg";
import hab7 from "../assets/h7.jpg";
import hab8 from "../assets/h8.jpg";

const Habitaciones = () => {
  // loading data from Database

  const [habs, setHabs] = useState(DataBase);

  const DATA = [
    { src: require("../assets/ins1.jpg") },
    { src: require("../assets/ins2.jpg") },
    { src: require("../assets/ins3.jpg") },
    { src: require("../assets/ins4.jpg") },
  ];
  const navigation = useNavigation("");
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);
  const [view4, setView4] = useState(false);
  const [view5, setView5] = useState(false);
  const [view6, setView6] = useState(false);
  const [view7, setView7] = useState(false);
  const [view8, setView8] = useState(false);
  const carouselRef = useRef(null);
  const [key, setKey] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [bed, setBed] = useState();
  const [capacity, setCapacity] = useState();
  const [bedType, setbedType] = useState();
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  function renderItem({ item, index }) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      >
        <Image source={item.src} style={styles.imagenCarr}></Image>
      </TouchableOpacity>
    );
  }
  function obtenerKey(key) {
    const datos = habs.find((obj) => obj.key === key);
    Object.values(datos).map((e) => {
      setKey(datos.key);
      setTitle(datos.title);
      setDescription(datos.description);
      setBed(datos.bed);
      setCapacity(datos.capacity);
      setbedType(datos.bedType);
      setPrice(datos.price);
      setAmount(datos.amount);
    });
  }
  return (
    <View style={styles.content}>
      <ScrollView showsVerticalScrollIndicator>
        <View style={styles.content2}>
          <Text style={styles.titulo}>Rooms</Text>
          <Text style={styles.subtitulo}>OUR FACILITIES</Text>
          <Carousel
            style={styles.carousel}
            data={DATA}
            renderItem={renderItem}
            itemWidth={250}
            containerWidth={325}
            ref={carouselRef}
            useS
          />

          <Text style={styles.subtitulo}>ROOM CATALOG</Text>

          <View style={styles.grid}>
            <TouchableOpacity
              onPress={() => {
                setView1(true);
                obtenerKey(1);
              }}
            >
              <Image source={hab1} style={styles.catalogo_img} />
            </TouchableOpacity>

            <Modal visible={view1} onClose={() => setView1(false)}>
              <ImageBackground
                source={hab1}
                style={{
                  resizeMode: "contain",
                  width: 320,
                  height: "95%",
                }}
              >
                <Text style={styles.titulocat}>{title}</Text>
                <Text style={styles.textocat}>{description}</Text>
                <Text style={styles.textocat}>Price ${price} </Text>
                <Text style={styles.textocat}>Bed type: {bedType}</Text>
                <Text style={styles.textocat}>Nights: {amount}</Text>
                <TouchableOpacity
                  onPress={() => {
                    obtenerKey(1);
                    navigation.navigate("TablaAgregar", {
                      precio: price,
                      noche: amount,
                      tipo: title,
                    });
                  }}
                >
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={50}
                    color="white"
                  />
                </TouchableOpacity>
              </ImageBackground>
            </Modal>

            <TouchableOpacity
              onPress={() => {
                setView2(true);
                obtenerKey(2);
              }}
            >
              <Image source={hab2} style={styles.catalogo_img} />
            </TouchableOpacity>

            <Modal visible={view2} onClose={() => setView2(false)}>
              <ImageBackground
                source={hab2}
                style={{
                  resizeMode: "contain",
                  width: 320,
                  height: "95%",
                }}
              >
                <Text style={styles.titulocat}>{title}</Text>
                <Text style={styles.textocat}>{description}</Text>
                <Text style={styles.textocat}>Price: ${price} </Text>
                <Text style={styles.textocat}>Bed type: {bedType}</Text>
                <TouchableOpacity
                  onPress={() => {
                    obtenerKey(2);
                    navigation.navigate("TablaAgregar", {
                      precio: price,
                      noche: amount,
                      tipo: title,
                    });
                  }}
                >
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={50}
                    color="white"
                  />
                </TouchableOpacity>
              </ImageBackground>
            </Modal>

            <TouchableOpacity
              onPress={() => {
                setView3(true);
                obtenerKey(3);
              }}
            >
              <Image source={hab3} style={styles.catalogo_img} />
            </TouchableOpacity>

            <Modal visible={view3} onClose={() => setView3(false)}>
              <ImageBackground
                source={hab3}
                style={{
                  resizeMode: "contain",
                  width: 320,
                  height: "95%",
                }}
              >
                <Text style={styles.titulocat}>{title}</Text>
                <Text style={styles.textocat}>{description}</Text>
                <Text style={styles.textocat}>Price: ${price} </Text>
                <Text style={styles.textocat}>Bed type: {bedType}</Text>
                <TouchableOpacity
                  onPress={() => {
                    obtenerKey(3);
                    navigation.navigate("TablaAgregar", {
                      precio: price,
                      noche: amount,
                      tipo: title,
                    });
                  }}
                >
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={50}
                    color="white"
                  />
                </TouchableOpacity>
              </ImageBackground>
            </Modal>

            <TouchableOpacity
              onPress={() => {
                setView4(true);
                obtenerKey(4);
              }}
            >
              <Image source={hab4} style={styles.catalogo_img} />
            </TouchableOpacity>

            <Modal visible={view4} onClose={() => setView4(false)}>
              <ImageBackground
                source={hab4}
                style={{
                  resizeMode: "contain",
                  width: 350,
                  height: "95%",
                }}
              >
                <Text style={styles.titulocat}>{title}</Text>
                <Text style={styles.textocat}>{description}</Text>
                <Text style={styles.textocat}>Price: ${price} </Text>
                <Text style={styles.textocat}>Bed type: {bedType}</Text>
                <TouchableOpacity
                  onPress={() => {
                    obtenerKey(4);
                    navigation.navigate("TablaAgregar", {
                      precio: price,
                      noche: amount,
                      tipo: title,
                    });
                  }}
                >
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={50}
                    color="white"
                  />
                </TouchableOpacity>
              </ImageBackground>
            </Modal>

            <TouchableOpacity
              onPress={() => {
                setView5(true);
                obtenerKey(5);
              }}
            >
              <Image source={hab5} style={styles.catalogo_img} />
            </TouchableOpacity>

            <Modal visible={view5} onClose={() => setView5(false)}>
              <ImageBackground
                source={hab5}
                style={{
                  resizeMode: "contain",
                  width: 320,
                  height: "95%",
                }}
              >
                <Text style={styles.titulocat}>{title}</Text>
                <Text style={styles.textocat}>{description}</Text>
                <Text style={styles.textocat}>Price: ${price} </Text>
                <Text style={styles.textocat}>Bed type: {bedType}</Text>
                <TouchableOpacity  onPress={() => {
                    obtenerKey(5);
                    navigation.navigate("TablaAgregar", {
                      precio: price,
                      noche: amount,
                      tipo: title,
                    });
                  }}>
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={50}
                    color="white"
                  />
                </TouchableOpacity>
              </ImageBackground>
            </Modal>

            <TouchableOpacity
              onPress={() => {
                setView6(true);
                obtenerKey(6);
              }}
            >
              <Image source={hab6} style={styles.catalogo_img} />
            </TouchableOpacity>

            <Modal visible={view6} onClose={() => setView6(false)}>
              <ImageBackground
                source={hab6}
                style={{
                  resizeMode: "contain",
                  width: 320,
                  height: "95%",
                }}
              >
                <Text style={styles.titulocat}>{title}</Text>
                <Text style={styles.textocat}>{description}</Text>
                <Text style={styles.textocat}>Price: ${price} </Text>
                <Text style={styles.textocat}>Bed type: {bedType}</Text>
                <TouchableOpacity  onPress={() => {
                    obtenerKey(6);
                    navigation.navigate("TablaAgregar", {
                      precio: price,
                      noche: amount,
                      tipo: title,
                    });
                  }}>
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={50}
                    color="white"
                  />
                </TouchableOpacity>
              </ImageBackground>
            </Modal>

            <TouchableOpacity
              onPress={() => {
                setView7(true);
                obtenerKey(7);
              }}
            >
              <Image source={hab7} style={styles.catalogo_img} />
            </TouchableOpacity>

            <Modal visible={view7} onClose={() => setView7(false)}>
              <ImageBackground
                source={hab7}
                style={{
                  resizeMode: "contain",
                  width: 320,
                  height: "95%",
                }}
              >
                <Text style={styles.titulocat}>{title}</Text>
                <Text style={styles.textocat}>{description}</Text>
                <Text style={styles.textocat}>Price: ${price} </Text>
                <Text style={styles.textocat}>Bed type: {bedType}</Text>
                <TouchableOpacity  onPress={() => {
                    obtenerKey(7);
                    navigation.navigate("TablaAgregar", {
                      precio: price,
                      noche: amount,
                      tipo: title,
                    });
                  }}>
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={50}
                    color="white"
                  />
                </TouchableOpacity>
              </ImageBackground>
            </Modal>

            <TouchableOpacity
              onPress={() => {
                setView8(true);
                obtenerKey(8);
              }}
            >
              <Image source={hab8} style={styles.catalogo_img} />
            </TouchableOpacity>

            <Modal visible={view8} onClose={() => setView8(false)}>
              <ImageBackground
                source={hab8}
                style={{
                  resizeMode: "contain",
                  width: 320,
                  height: "95%",
                }}
              >
                <Text style={styles.titulocat}>{title}</Text>
                <Text style={styles.textocat}>{description}</Text>
                <Text style={styles.textocat}>Price: ${price} </Text>
                <Text style={styles.textocat}>Bed type: {bedType}</Text>
                <TouchableOpacity  onPress={() => {
                    obtenerKey(8);
                    navigation.navigate("TablaAgregar", {
                      precio: price,
                      noche: amount,
                      tipo: title,
                    });
                  }}>
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={50}
                    color="white"
                  />
                </TouchableOpacity>
              </ImageBackground>
            </Modal>
          </View>

          <View style={styles.pie}>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => alert("Select the room to reserve")}
            >
              <Text>RESERVA YA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => navigation.navigate("Perfil")}
            >
              <AntDesign name="user" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: "ivory",
  },
  imagenCarr: {
    width: 250,
    height: 325,
    borderWidth: 5,
    borderColor: "white",
    flex: 1,
  },
  content2: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "ivory",
  },
  titulo: {
    fontFamily: "monospace",
    fontSize: 35,
    color: "#6e5535",
    margin: 10,
  },
  subtitulo: {
    fontSize: 20,
    fontFamily: "monospace",
    color: "#6e5535",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "space-between",
    flex: 1,
  },
  catalogo_img: {
    width: 165,
    height: 250,
    margin: 5,
    borderRadius: 5,
    flexGrow: 0,
  },
  textocat: {
    color: "white",
    fontFamily: "monospace",
    fontSize: 16,
    margin: 15,
  },
  titulocat: {
    color: "white",
    fontFamily: "monospace",
    fontSize: 25,
    margin: 15,
  },
  pie: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  boton: {
    padding: 10,
    margin: 10,
    fontSize: 25,
    fontFamily: "monospace",
    backgroundColor: "rgba(168, 140, 81 , 0.4)",
    borderColor: "rgba(168, 140, 81 , 0.4)",
    borderRadius: 10,
  },
  containTexto: {
    backgroundColor: "rgba(1,1,1, 1)",
  },
  item: {
    borderWidth: 2,
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    borderColor: "white",
    elevation: 1,
  },
  carousel: {
    backgroundColor: "#141518",
    aspectRatio: 1.3,
    marginBottom: 20,
    flexGrow: 0,
  },
  cart: {
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: 14,
  },
});
export default Habitaciones;
