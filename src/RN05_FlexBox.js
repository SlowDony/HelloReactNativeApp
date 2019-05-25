/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * StateDemo
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Image, View, Text } from "react-native";

class DefaultWidth extends Component {

  render() {
    return (

      <View style={{marginTop:100}}>
        <Text>根节点上放一个View组件,不设置宽度 </Text>
        <View style={{height:30,backgroundColor:'red'}}></View>
        <Text>根节点上放一个View组件,设置宽度 </Text>
        <View style={{height:30,width:50,backgroundColor:'red'}}></View>

         <Text>运用Flex布局多个组件在一行显示 </Text>
        <View style={{flexDirection:'row'}}>
          <View style={{height:30,backgroundColor:'red',flex:1}}></View>
          <View style={{height:30,backgroundColor:'yellow',flex:1}}></View>
          <View style={{height:30,backgroundColor:'blue',flex:1}}></View>
        </View>

        <Text>运用Flex布局多个组件不在一行显示 </Text>
        <View style={{flexDirection:'column'}}>
          <View style={{height:30,backgroundColor:'red'}}></View>
          <View style={{height:30,backgroundColor:'yellow'}}></View>
          <View style={{height:30,backgroundColor:'blue'}}></View>
        </View>  
      </View>
    )
  }
}

class PaddingView extends Component {

  render() {
    return (
      <View style={styles.paddingViewFather} >

        <View style={styles.paddingViewChild} >
           {/* <Text style={
             styles.textStyle
           }>哈哈</Text> */}
        </View>

        <View style={styles.paddingViewChild1} >
        </View>
         
      </View>
    );
  }
}

///定位
class PositionView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.position1} />
        <View style={styles.position2} />
        <View style={styles.position3} />
        <View style={styles.position4} />
      </View>
    );
  }
}

///随机颜色的view
class RandomView extends Component {
  ///随机色
  randomColor() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.color = "rgba(" + this.r + "," + this.g + "," + this.b + ",0.8)";
    return this.color;
  }
  render() {
    return (
      <View
        style={{ width: 50, height: 50, backgroundColor: this.randomColor() }}
      >
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

class FlexDemo extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
          // flexDirection: "row",
          // justifyContent:'center'
        }}
      >
        <View style={{ flex: 1, backgroundColor: "powderblue" }} />
        <View style={{ flex: 1, backgroundColor: "skyblue" }} />
        <View style={{ flex: 1, backgroundColor: "steelblue" }} />
      </View>
    );
  }
}

/**
默认情况下，项⽬都排在⼀条线（⼜称"轴线"）上。flex-wrap属性定义，如果⼀条轴线排不下，如何换⾏
nowrap(默认值)：不换⾏
wrap：换⾏，第⼀⾏在上⽅
wrap-reverse：换⾏，第⼀⾏在下⽅。（和wrap相反）
 */
class FlexWrap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewArr: [1, 2, 3]
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "nowrap"
          // alignSelf:"center",
        }}
      >
        {/* viewArray.map(info,index)=>{
        return (<RandomView name="haha"></RandomView>)
      } */}

        <RandomView name="1" />
        <RandomView name="2" />
        <RandomView name="3" />
        <RandomView name="4" />
        <RandomView name="5" />
        <RandomView name="6" />
        <RandomView name="7" />
        <RandomView name="8" />
        <RandomView name="9" />
        <RandomView name="10" />
        <RandomView name="11" />
      </View>
    );
  }
}

/**
定义项目在交叉轴上如何对齐，可以把其想像成侧轴（垂直于主轴）的“对齐方式”。
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐 。
center：交叉轴的中点对齐。
baseline：项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
 */
class AlignItems extends Component {
  render() {
    return (
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "stretch"
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }} //alignSelf:"center",
        />
        <View style={{ height: 50, backgroundColor: "skyblue" }} />
        <View style={{ height: 100, backgroundColor: "steelblue" }} />
      </View>
    );
  }
}

/**
定义了伸缩项目在主轴线的对齐方式
flex-start(默认值)：伸缩项目向一行的起始位置靠齐。
flex-end：伸缩项目向一行的结束位置靠齐。
center：伸缩项目向一行的中间位置靠齐。
space-between：两端对齐，项目之间的间隔都相等。
space-around：伸缩项目会平均地分布在行里，两端保留一半的空间。
 */
class JustifyContent extends Component {
  render() {
    return (
      // 尝试把`justifyContent`改为`center`看看
      // 尝试把`flexDirection`改为`row`看看
      <View
        style={{
          flex: 1,
          flexDirection: "column"
          // justifyContent: "flex-end"
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
      </View>
    );
  }
}

/*
flexDirection容器属性: `row | row-reverse | column | column-reverse`
该属性决定主轴的方向（即项目的排列方向）。
row：主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端。
column(默认值)：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿。
*/
class FlexDirection extends Component {
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看

      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
      </View>
    );
  }
}

export default class FlexBox extends Component {
  render() {
    // FlexDemo
    // JustifyContent
    // FlexDirection
    // AlignItems
    // FlexWrap
    // PositionView
    // PaddingView
    // DefaultWidth

    return <DefaultWidth />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  position1: {
    width: 100,
    height: 100,
    backgroundColor: "red"
  },
  position2: {
    width: 100,
    height:100,
    backgroundColor: "blue"
  },
  position3: {
    width: 100,
    height: 100,
    backgroundColor: "yellow"
  },
  position4: {
    width: 100,
    height: 100,
    backgroundColor: "#777",
    // position:'relative', ///相对布局
    position:'absolute', ///绝对布局
    left:100,
    top:100,
  },

  paddingViewFather:{
      width: 300,
      height: 300,
      backgroundColor:'blue',
      // justifyContent:'center',
      // alignItems: 'center',
      //  padding: 75,///内边距
      // margin: 10, ///外边距
  },
  paddingViewChild:{
      width: 150,
      height: 150,
      backgroundColor:'red',
      padding: 10, ///内边距
      borderWidth: 10,
      borderColor: "green",
      margin: 10, ///外边距
      
  },
  textStyle:{
     width: 20,
      height: 20,
      backgroundColor: "yellow",
  },
  paddingViewChild1:{
     width: 50,
      height: 50,
      backgroundColor: "#062178",
      
  }
});
