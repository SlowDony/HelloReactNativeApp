/**
 * Created by slowdony on 2018/7/19.
 * 01.初识React Native
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

/**
 * 方式一:ES6
 * 推荐使用
 * */
export default class HelloComponent extends Component{
    render(){
        return <Text style={{fontSize:20}}>hello.{this.props.name}</Text>
    }
}

///**
// * 方式二:ES5
// * 新版本 createClass已经被废除了
// * */
//var HelloComponent = React.createClass({
//        render(){
//            return <Text style = {{fontSize:20,backgroundColor:'blue'}}>hello es6</Text>
//        }
//})
//module.exports = HelloComponent;


/**
 * 方式三:函数
 * 无状态 不能使用this
 * */
//function HelloComponent(props){
//    return <Text style={{fontSize:20,backgroundColor:'red'}}>hello funs.{props.name}</Text>
//}
//module.exports =  HelloComponent;








































