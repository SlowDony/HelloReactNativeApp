/**
 * Created by slowdony on 2018/7/21.
 * 03.React Native的导入与导出
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


/* 单个导出 在变量/常量前加 `export`*/
export var name = "小明";

/* 多个导出时*/
const age = 20;
var address = "中国";
export {age,address};


/* 定义组件前添加 export default*/
export default class RN03_ImportAndExportComponent extends Component{
    render(){
        return <Text style={{fontSize:20}}>03.React Native的导入与导出.</Text>
    }
}