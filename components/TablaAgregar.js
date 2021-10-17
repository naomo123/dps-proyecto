import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class TablaAgregar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            header: ['Tipo de habitacion','Precio', '# Noches'],
            item: [
                ["HP 1", "$ 350.00", "2"],
                ["HE 1", "$ 150.00", "2"],
                ["HM 2", "$ 200.00", "2"]
            ]
        }
    }

    render(){
        const state = this.state;
        return(
            <View style={styles.content}>
                <ScrollView>
                    <Text style={styles.titulo}>HABITACIONES SELECCIONADAS</Text>
                    <View>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#fff'}}>
                            <Row data={state.header} style={styles.head} textStyle={{color: "#fff", textAlign: 'center', fontSize: 17}}/>
                            <Rows  data={state.item} style={styles.tbody} textStyle={styles.text}/>
                        </Table>
                    </View>
                    <TouchableHighlight style={styles.btn_confirm}>
                        <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>
                            HACER RESERVA
                        </Text>
                    </TouchableHighlight>
                    <Text style={styles.btn_cancel}>
                        CANCELAR PROCESO
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

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
    itemContainer: {
        textAlign: 'center',
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 100,
        backgroundColor: "ivory"
    },
    head: { height: 60, backgroundColor: '#000', width: 350},
    tbody: {
        height: 60, backgroundColor: "ivory", borderColor: "#001000", width: 350
    },
    text: { margin: 6, fontSize: 20, textAlign: 'center' }
})