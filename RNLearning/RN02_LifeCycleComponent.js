/**
 * Created by slowdony on 2018/7/21.
 * 02.React Native 生命周期
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class LifeCycleComponent extends Component{
    constructor(props){ //完成组件的初始化
        super(props);
        this.state={
            count : 0,
        }
        console.log('----controuctor----');
    }

    componentWillMount(){
        console.log('----componentWillMount ----');

}
    componentDidMount(){
        console.log('----componentDidMount----');
    }

    componentWillReceiveProps(props){
        console.log('----componentWillReceiveProps----');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('----shouldComponentUpdate----');
        return true;
    }


    componentWillUpdate(nextProps,nextState){
        console.log('----componentWillUpdate----');
    }
    componentDidUpdate(nextProps,nextState){
        console.log('----componentDidUpdate----');
    }

    componentWillUnmount(){
        console.log('----componentWillUnmount----');
    }
    render(){
        console.log('----render----');
        return <View>
            <Text style={{fontSize:20}}
            onPress={()=>{
                this.setState({
                     count:this.state.count+1,
                })
             }}
             >hello</Text>
            <Text style={{fontSize:20}}>点击了{this.state.count}次</Text>
        </View>
    }
}
