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

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true
    };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      // this.setState(previousState => {
      //   return { isShowingText: !previousState.isShowingText };
      // });
      this.setState({
        isShowingText: !this.state.isShowingText
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return null;
    }
    return <Text>{this.props.text}</Text>;
  }
}

class TextInputTest extends Component {
  buttonClick() {
    var textInput = this.refs.textInput;
    textInput.focus();
    console.log(textInput.props.placeholder);
  }
  render() {
    return (
      <View style={styles.constructor}>
        <TouchableOpacity onPress={() => this.buttonClick()}>
          <Text>按钮点击</Text>
        </TouchableOpacity>
        <TextInput ref="textInput" placeholder="请输入文字" />
      </View>
    );
  }
}

class ClickState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }
  buttonClick() {
    var count = this.state.clickCount;
    count++;
    this.setState({
      clickCount: count
    });
  }
  render() {
    return (
      <View style={styles.constructor}>
        <TouchableOpacity onPress={() => this.buttonClick()}>
          <Text>我是一个按钮请点击</Text>
        </TouchableOpacity>
        <Text> 按钮点击了{this.state.clickCount} </Text>
      </View>
    );
  }
}

export default class RN02_State extends Component {
  render() {
    return (
      <View style={styles.constructor}>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>

      //  <TextInputTest /> 
    );
  }
}

const styles = StyleSheet.create({
  constructor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
