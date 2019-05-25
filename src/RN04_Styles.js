/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * StateDemo
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Image ,View,Text} from "react-native";


/**

在 React Native 中，所有的核⼼组件都接受名为style的属性。这些样式名基本上是遵循了 web 上的 CSS 的命名，只是按照 JS 的语法要求使⽤了驼峰命名法，
例如将background-color改为backgroundColor。

（1）普通内联样式:{{}},第⼀层｛｝是表达式，第⼆层｛｝是js对象；

<View style={{fontSize:40, width:80,}}> </View>

（2）调⽤样式表:{样式类.属性}

<View style={styles.container}></View>

（3）样式表和内联样式共存:{[]}

<View style={[styles.container, {fontSize:40, width:80}]}>

（4）多个样式表:{[样式类1， 样式类2]}

<View style={[styles.container, styles.color]}>


样式使用数组时——在数组中位置居后的样式对象⽐居前的优先级

更⾼，这样你可以间接实现样式的继承。

 */

export default class RN04_Styles extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
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
  });
