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


class TableViewCell extends Component {

  render() {
    var item = this.props.dataItem;
    
    return (
      <TouchableOpacity
        onPress={()=>{
          if((item.path==='NativeViewController')||(item.path==='NativeOneViewController')){
            NativeModules.BTModules.openPageClass(item.path,'原生的界面')
          }else if(item.path ==='NativeTwoViewController'){
            // NativeModules.BTModules.sendMessage('原生的界面的数据')
            NativeModules.BTModules.openPageClass(item.path,'原生的界面')
          }
          else{
            this.props.navigate.navigate(item.path);
          }
        }}
      >
        <View style={styles.cellStyle}>
          <Text> {item.name} </Text>
        </View>
        <View style={styles.lineStyle} />
      </TouchableOpacity>
    );
  }

}

export default class RNToNative extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataArr: [
        { name: '1.初始化RN时Native向JS传递数据；',path:'NativeViewController' },
        { name: '2.Native发送数据给JS' ,path:'NativeTwoViewController'},
        { name: '3.JS发送数据给Native',path:'NativeOneViewController' },
        { name: '4.JS发送数据给Native，然后Native回传数据给JS' ,path:'jsToNativeAndBlock'},
      ],
    }
  }

  render() {
    const {navigation} = this.props;
    return (

      <FlatList
        data={this.state.dataArr}
        renderItem={({ item }) => <TableViewCell dataItem={item} navigate={navigation}/>}
        style={styles.tableViewStyle}
      />
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