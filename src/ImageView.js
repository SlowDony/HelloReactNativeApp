/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";


export default class ImageView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>加载本地图片</Text>
        <Image
          source={require("./image/botuicon.png")}
          style={styles.imageStyle}
        />

        <Text style={styles.welcome}>加载Native图片 </Text>
        <Image source={{ uri: "logo" }} style={styles.imageStyle} />

        <Text style={styles.welcome}>加载网络图片</Text>
        <Image
          source={{ uri: "https://facebook.github.io/react/logo-og.png" }}
          style={styles.imageStyle}
        />

        <Text style={styles.welcome}>base64加载图片</Text>
        <Image style={styles.imageStyle} source={{ uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="}}/>
        
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
  },
  imageStyle: {
    width: 100,
    height: 100
  },
  welcome: {
    height: 25,
    paddingTop: 5
  }
});
