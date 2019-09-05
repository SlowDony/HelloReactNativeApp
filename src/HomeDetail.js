/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * StateDemo
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Image ,View,Text,TouchableOpacity} from "react-native";
// import {Actions} from 'react-native-router-flux';


export default class HomeDetail extends Component {


  constructor(props){
      super(props);
      this.state = {
         
      }

  }
  render() {      
    return (
      <View style={styles.container}>
        <Text>欢迎来到详情</Text>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  })