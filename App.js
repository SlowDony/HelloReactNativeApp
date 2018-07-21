/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import HelloComponent from './HelloComponent'; //01.初识 react-native
//import LifeCycleComponent from './LifeCycleComponent'; //02.组件的生命周期
import RN03_ImportAndExportComponent from './RN03_ImportAndExportComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);

  }

  render() {

    return (
      <View style={styles.container}>
       <RN03_ImportAndExportComponent/>
      </View>
    );
  }
}


/*
* 02 查看LifeCycleComponent的生命周期模拟移除组件
* */
//render() {
//
//  var myView = this.state.remove?null:<LifeCycleComponent />;
//  var myText = this.state.remove?"添加myView":"移除myView";
//
//  return (
//      <View style={styles.container}>
//<Text
//  style={{fontSize:20}}
//  onPress={()=>{
//    this.setState({
//      remove : !this.state.remove
//    })
//  }}>{myText}
//</Text>
//  {myView}
//  </View>
//);
//}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
