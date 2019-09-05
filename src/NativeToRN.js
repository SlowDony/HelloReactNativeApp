// NativeToJS.js
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * StateDemo
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Image, View, Text, TouchableOpacity, FlatList, NativeModules, } from "react-native";

export default class NativeToRN extends Component {
  render() {
    return (
      <View style={styles.tableViewStyle}>
        <Text> {this.props.params} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tableViewStyle: {
    flex:1,
    backgroundColor: "#F5FCFF",
    justifyContent:'center',
    alignItems: 'center',
  },
  cellStyle: {
    height:60,
    justifyContent:'center',
  },
  lineStyle: {
    backgroundColor:'#EAEAEA',
    height:1,

  }
})