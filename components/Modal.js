// Dependencies
import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styless } from './style_modal';

function ModalCustom({children, onDismiss =()=>  null, onShow =()=>  null, onClose, visible}) {
    
   
    return (


        <Modal
            animationType="fade"
            onDismiss={onDismiss}
            onShow={onShow}
            transparent
            visible={visible}
        >
            <View style={styless.container}>
                <View style={styless.subcontainer}>
                
                    <View style={styless.headerContainer}>
                    <TouchableOpacity
                            onPress={onClose}
                        >
                              <AntDesign name="close"  size={30} color="white" />
                        </TouchableOpacity>
                    </View>

                    {children}
                    
                </View>
            </View>
        </Modal>
    );
}

export default ModalCustom;