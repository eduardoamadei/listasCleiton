import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import styles from "./styles";

export default function Box(props){
    return(
        <View style={[styles.box,{backgroundColor: props.cor}]}>
           <Text style={[styles.labelTxt,{color: props.lblcolor}]}>{props.message}</Text>
        </View>
    );
}