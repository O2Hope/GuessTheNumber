import React from "react";
import {Text, View, StyleSheet} from "react-native";
import Colors from "../constants/colors"


const Header = ({title}) => (
    <View style={styles.header}>
     <Text style={styles.title}>{title}</Text>
    </View>
)

const styles = StyleSheet.create({
header: {
    width:"100%",
    height:90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
},
title: {
    color: "white",
    fontSize: 18
}
})

export default Header;