/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert,} from 'react-native';


//屏幕信息
var dimensions = require('Dimensions');
var { width, height } = dimensions.get('window');

// 输入框组件
class TextFiled extends Component {
  render() {
    var isShow = this.props.isShow === 'false' ? false : true;
    return (
      <View style={styles.phoneNumStyle} >
        <Text style={styles.textStyle}>{this.props.name}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={this.props.placeholder}
          clearButtonMode='while-editing'
          keyboardType={this.props.keyboardType}
          secureTextEntry={isShow}
        />
      </View>
    );
  }
}

export default class TextInputs extends Component {
  constructor(props) {
    super(props);
    
  };
  _onPress(){
    this.props.onPress();
  };

  render() {
    return (
      <View style={styles.container}>

        {/* 登录标题 */}
        <Text style={styles.loginTitleStyle}>密码登录</Text>

        {/* 手机号输入 */}
        <TextFiled name='手机' placeholder='请输入手机号' isShow='false' keyboardType='phone-pad'></TextFiled>

        {/* 密码输入 */}
        <TextFiled name='密码' placeholder='请输入密码' isShow='true'></TextFiled>

        {/* 忘记密码 */} 
        <TouchableOpacity
          style={styles.forgetTextStyle}
          onPress={() => {
            Alert.alert('忘记密码', '', [{ text: '确定', onPress: () => console.log('确定') }]);
          }}
        >
          <Text style={styles.forgetTextStyle}>忘记密码</Text>
        </TouchableOpacity>

        {/* 登录按钮 */}
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            this._onPress.bind(this);
            
          }
          }
          // accessible = {false}
          activeOpacity={0.5}

        >
          <Text style={styles.loginText}>登录</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

//loginViewStyle
const styles = StyleSheet.create({
  // 整体布局
  container: {
    flex: 1,
    backgroundColor: '#FFFFff',
    top: 20,
    margin: 20,

  },

  // 登录文字布局
  loginTitleStyle: {
    fontSize: 18,
    marginTop: 150,
    marginBottom: 30,

  },
  textInput: {
    height: 30,
    width: width - 40,
    // backgroundColor:'red',
    textAlign: 'left',
    borderBottomWidth: 0.3,
    borderBottomColor: '#666666',
  },
  textStyle: {
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 10,

  },
  //忘记密码
  forgetTextStyle: {
    // fontSize: 14,
    textAlign: 'right',
    width: width - 40,
    height: 30,
    color: '#666666',
    marginTop: 10,
  },
  btnStyle: {
    justifyContent: 'center',
    width: width - 40,
    height: 35,
    backgroundColor: '#FF6A00',
    //  opacity:this.state.btnOpacity,
    borderRadius: 3,

  },
  loginText: {
    textAlign: 'center',
    color: '#ffffff',
  }



});

