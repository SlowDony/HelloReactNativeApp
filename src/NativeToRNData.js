// NativeToJS.js
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * StateDemo
 * @format
 * @flow
 */
// NativeEventEmitter.js
///Users/botu/Desktop/RN/appdemo/node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter.js with code
// invariant(nativeModule, 'Native module cannot be null.');
import React, { Component } from "react";
import { Platform, StyleSheet, Image, View, Text, TouchableOpacity, FlatList, NativeModules,NativeEventEmitter } from "react-native";
export default class NativeToRNData extends Component {

  constructor(props) {
    super(props);
    this.state = {
     data:'',
     result:null
    }
  }
  componentDidMount(){
    var iOSExport = NativeModules.RCTNativeEventEmitter
    this.dataToJsPresenter = new NativeEventEmitter(iOSExport);
    this.dataToJsPresenter.addListener('testData',(e)=>{
      this.setState({
        data:e.data
      })
    })
  }
  componentWillUnmount(){
    if (this.dataToJSPresenter){
      this.dataToJSPresenter.removeListener('testData');
  }
  }
  render() {

    return (
      <View style={styles.tableViewStyle}>
        <Text> 收到 native的数据:{this.state.data} </Text>
        <TouchableOpacity 
         onPress={()=>{
            NativeModules.BTModules.sendMessage('原生的界面数据哈哈哈哈哈');
        }}>
          <Text>点击</Text>
        </TouchableOpacity>
      </View>
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