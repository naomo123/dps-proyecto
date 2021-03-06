import * as React from 'react';
import { DataTable } from 'react-native-paper';
import Database from './DataBase';
import { useNavigation } from "@react-navigation/core";
import {View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';

const TablaAgregar = ({route}) => {
   
  const navigation = useNavigation("");
  return (
    <View style={styles.content}>
    <ScrollView>
        <Text style={styles.titulo}>HABITACIONES SELECCIONADAS</Text>
        <View>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Room types : {route.params.tipo}</DataTable.Title>
        <DataTable.Title numeric>Price: {route.params.precio}</DataTable.Title>
        <DataTable.Title numeric>Nights: {route.params.noche}</DataTable.Title>
      </DataTable.Header>
    
    </DataTable>
    </View>
    <TouchableHighlight style={styles.btn_confirm}
    onPress={()=> navigation.navigate("DatosOrden", {total: route.params.precio*route.params.noche})}
    
    >
                        <Text style={{ fontSize: 25, textAlign: 'center'}}>
                            Make reservation 
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.btn_cancel}
    onPress={()=> navigation.navigate("Habitaciones")}
    
    >
                    <Text>
                        Cancel process 
                    </Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
  );
};


const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    titulo: {
        fontFamily: "monospace",
        fontSize: 35,
        color: '#6e5535',
        textAlign: 'center',
        marginBottom: 15
    },
    btn_confirm: {
        backgroundColor: '#6e5535',
        borderRadius: 10,
        padding: 15,
        marginTop: 25,
        marginBottom: 15
    },
    btn_cancel: {
        marginTop: 15,
        color: "red",
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 24
    },
   
  
})
export default TablaAgregar;
