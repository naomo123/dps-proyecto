import * as React from 'react';
import { DataTable } from 'react-native-paper';
import Database from './DataBase';
import { useNavigation } from "@react-navigation/core";
import {View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import Habitaciones from './Habitaciones';

const TablaAgregar = () => {
   
  const navigation = useNavigation("");
  return (
    <View style={styles.content}>
    <ScrollView>
        <Text style={styles.titulo}>HABITACIONES SELECCIONADAS</Text>
        <View>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Tipo de habitacion</DataTable.Title>
        <DataTable.Title numeric>Precio</DataTable.Title>
        <DataTable.Title numeric>Noches</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
      </DataTable.Row>

    
    </DataTable>
    </View>
    <TouchableHighlight style={styles.btn_confirm}
    onPress={()=> navigation.navigate("DatosOrden")}
    
    >
                        <Text style={{ fontSize: 25, textAlign: 'center'}}>
                            HACER RESERVA
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.btn_cancel}
    onPress={()=> navigation.navigate("Habitaciones")}
    
    >
                    <Text>
                        CANCELAR PROCESO
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
        fontFamily: "Monospace",
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
