// MainTableView.js
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, SectionList, TouchableOpacity } from 'react-native';
import { red } from 'ansi-colors';

//屏幕信息
var dimensions = require('Dimensions');
var { width, height } = dimensions.get('window');

class TableViewellLine extends Component {
    render(){
        return (
        <View style={styles.lineStyle}></View>
        );
    }
}

class TableViewCell extends Component {
    render() {
        var item = this.props.dataItem;
        return (
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate(item.path);
            }}>
                <View style={styles.tableViewCellStyle}>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

class TableViewHeader extends Component {
    render() {
        return (
            <View style={styles.tableViewHeaderStyle}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

export default class MainTableView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArr: [
                {
                    title: 'ReactNative入门', data: [
                        { title: '01:Props(属性)', path: 'PropsPage' },
                        { title: '02:State(状态)', path: 'StatePage' },
                        { title: '03:Styles(样式)', path: 'StylesPage' },
                        { title: '04:Lifecycle(生命周期)', path: 'LifecyclePage' },
                        { title: '05:FlexBox(盒子布局)', path: 'FlexBoxPage' },
                        { title: '06:Screen', path: '01' },
                        { title: '07:基础组件之试图(View)', path: 'ViewPage' },
                        { title: '08:基础组件之Image(图片)', path: 'ImageViewPage' },
                        { title: '09:基础组件之列表(ScrollView,FlatList,SectionList)', path: 'ScrollViewPage' },
                        { title: '10:基础组件之文本输入(TextInput)', path: 'TextInputPage' },
                        { title: '11:基础组件之触摸事件(Touchable系列)', path: 'TouchablePage' },
                        { title: '12:基础组件之列表(ScrollView,FlatList,SectionList)', path: '01' },
                    ]
                },
                {
                    title: 'ReactNative进阶', data: [
                        { title: '13:组件导航(React Navigation)', path: '01' },
                        { title: '14:⽹络与存储(Fetch,离线缓存框架)', path: '01' },
                        { title: '15:将ReactNative集成到现有的iOS原⽣应⽤', path: '01' },
                        { title: '16:ReactNative 与原⽣iOS通信⽅式', path: '01' },
                        { title: '17:', path: '01' },
                        { title: '18:', path: '01' },
                    ]
                }]
        }
    }

    render() {
        return (
            <SectionList
                renderItem={({ item }) => (<TableViewCell dataItem={item} navigation = {this.props.navigation} />)}
                renderSectionHeader={({ section: { title } }) => (<TableViewHeader title={title} />)}
                sections={this.state.dataArr}
                ItemSeparatorComponent = {()=>(<TableViewellLine/>)}
                keyExtractor={(item,index)=>item+index}
            >
            </SectionList>
            
            // <TableViewellLine></TableViewellLine>
        );
    }
}

//loginViewStyle
const styles = StyleSheet.create({
    // 整体布局
    container: {
        flex: 1,
        backgroundColor: '#FFFFff',
        // top: 20,
        // margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tableViewCellStyle: {
        height: 44,
        width:width-30,
        justifyContent: 'center',
        marginLeft:30,
        marginRight:0,
    },
    tableViewHeaderStyle: {
        height: 20,
        width:width,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems:'center',
        fontSize: 16,
        fontWeight: '400',
    },
    lineStyle:{
        backgroundColor:'#EAEAEA',
        height:1,
    }

});


