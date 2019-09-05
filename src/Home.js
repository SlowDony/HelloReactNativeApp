/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * StateDemo
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";



export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailPage', { name: '跳转的_' });
          }}>
          <Text>点击跳转详情的</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
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