/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * StateDemo
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";

var Dimensions = require('Dimensions');
var { width,height,scale } = Dimensions.get('window');
export default class Screen extends Component {
  render() {
    return (
      <View style={styles.constructor}>
        <Text> 当前屏幕的宽度:{width} </Text>
        <Text> 当前屏幕的高度:{height} </Text>
        <Text> 当前屏幕的分辨率:{scale} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constructor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
