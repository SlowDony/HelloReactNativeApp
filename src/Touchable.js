/* 
  ScrollView
 */
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableNativeFeedback,
  ScrollView,
  Alert,
} from "react-native";

export default class Touchable extends Component {
    state = {
        count: 0,
        countLong: 0,
        text: '',
        waiting: false,
        startTime: 0
    }

    render() {
        return (
            <View style={styles.container}>

                    <TouchableWithoutFeedback
                        onPress={()=> {
                            this.setState({count: this.state.count + 1})
                        }}
                        onLongPress={()=> {
                            this.setState({countLong: this.state.countLong + 1})
                            Alert.alert(
                                '提示',
                                '确定要删除吗?',
                                [
                                    {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                    {text: '确实', onPress: () => console.log('OK Pressed')},
                                ]
                            )
                        }}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                我是TouchableWithoutFeedback,单机她
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        disabled={this.state.waiting}
                        onPress={()=> {
                            this.setState({text: '正在登录...', waiting: true,count: this.state.count + 1})
                            setTimeout(()=> {
                                this.setState({text: '网络不流畅', waiting: false})
                            }, 2000);

                        }}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                               我是TouchableWithoutFeedback,点击 登录
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        style={{marginBottom:20}}
                        onPressIn={()=> {
                            this.setState({text: '触摸开始', startTime: new Date().getTime()})
                        }}
                        onPressOut={()=> {
                            this.setState({text: '触摸结束,持续时间:' + (new Date().getTime() - this.state.startTime) + '毫秒'})
                        }}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                我是TouchableWithoutFeedback点我
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableHighlight
                        style={styles.touchHighStyle}
                        activeOpacity={0.7}
                        underlayColor='green'
                        onHideUnderlay={()=> {
                            this.setState({text: '衬底被隐藏'})
                        }}
                        onShowUnderlay={()=> {
                            this.setState({text: '衬底显示'})
                        }}
                        onPress={()=> {

                        }}
                    >
                        <View style={styles.buttonHighlight}>
                            <Text style={styles.buttonTextHighlight}>
                                我是TouchableHighlight点我
                            </Text>
                        </View>
                    </TouchableHighlight>

                    
                    {/* <TouchableNativeFeedback
                        onPress={()=>{
                            this.setState({count: this.state.count + 1})
                        }}
                        background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                            <Text style={{margin: 30}}>TouchableNativeFeedback</Text>
                        </View>
                    </TouchableNativeFeedback> */}

                    <Text style={styles.text}>{this.state.text}</Text>
                    <Text style={styles.text}>您单击了:{this.state.count}次</Text>
                    <Text style={styles.text}>您长按了:{this.state.countLong}次</Text>

            </View>
        );
    }
}




const styles = StyleSheet.create({
  container: {
        flex: 1,
        marginTop: 50
    },
    button: {
        borderWidth: 0.5,
        height:50,
        marginBottom:20,
        margin:10,
        justifyContent: 'center',
         alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'red',
        backgroundColor:'white',

       
    },
    buttonHighlight:{
        borderWidth: 0.5,
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },
    buttonTextHighlight: {
        fontSize: 18,
        color: 'black',
        // backgroundColor:'white',
        // flex:1,
      
    },
    touchHighStyle:{
        margin:10,
        backgroundColor:"red"
    },

    text: {
        fontSize: 16,
        marginBottom:20
    },
});
