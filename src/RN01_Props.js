/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * PropsDemo
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Image ,View,Text} from "react-native";


class ImageDemo extends Component {
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return <Image source={pic} style={{ width: 193, height: 110 }} />;
  }
}

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class RN01_Props extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Greeting name="Rexxar" />
        <Greeting name="Jaina" />
        <Greeting name="Valuers" />
        {/* <ImageDemo></ImageDemo> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
