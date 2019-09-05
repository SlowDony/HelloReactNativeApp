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

export default class RNToNativeBlock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataArr: [
        { name: '1.初始化RN时Native向JS传递数据；',path:'NativeViewController' },
        { name: '2.Native发送数据给JS' ,path:'jsToNativeAndBlock'},
        { name: '3.JS发送数据给Native',path:'NativeOneViewController' },
        { name: '4.JS发送数据给Native，然后Native回传数据给JS' ,path:'jsToNativeAndBlock'},
      ],
    }
  }

  render() {
    const {navigation} = this.props;
    return (
      <View></View>
    );
  }
}



const styles = StyleSheet.create({
  tableViewStyle: {
    backgroundColor: "#F5FCFF"
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