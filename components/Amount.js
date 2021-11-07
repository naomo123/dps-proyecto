import React from 'react';
import {
    View,
    StyleSheet,

  } from "react-native";
const Amount = (props) => {
    const {data}=props;
    console.log(data);
    
    var sum=0;
    for(var i=0;i<data.length;i++){
        console.log(data[i].price);
        sum+=data[i].price;
    }
    console.log(data.length);
    console.log("Total : "+sum);

    return (
       <View>
                <Text>Summary{""}</Text>
                <Text>Total Room : {data.length}{""}</Text>
                <Text>Total Price: {sum}$</Text>
             
     </View>
    );
};

export default Amount;
