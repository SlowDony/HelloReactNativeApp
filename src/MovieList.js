/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, FlatList } from 'react-native';


//屏幕信息
var dimensions = require('Dimensions');
var { width, height } = dimensions.get('window');
var movie_data = [{ title: "标题", year: "20", posters: { thumbnail: "http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg" } }];
var MOVIE_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

export default class MovieList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // 电影数据源
      movieDataSource: [],
      loaded: false,
    }
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  //网络请求
  fetchData() {
    fetch(MOVIE_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          movieDataSource: this.state.movieDataSource.concat(responseData.movies),
          loaded: true,
        });
      });
  }

  render() {
    var movie = movie_data[0];
    if (!this.state.loaded) {
      return this.loadView();
    }

    return (
      <FlatList 
      style={styles.listStyle} 
      data={this.state.movieDataSource} 
      renderItem={this.movieCell}
      keyExtractor={item => item.id}>
      </FlatList>
    );

  }

  loadView() {
    return (
      <View style={styles.container}>
        <Text>加载中</Text>
      </View>
    )
  }
  movieCell({ item }) {
    return (
      <View style={styles.container}>
        <Image style={styles.movieImageBg} source={{ uri: item.posters.thumbnail }}></Image>
        <View style={styles.textStyle}>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={styles.yearStyle}>{item.year}</Text>
        </View>
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
    // top: 20,
    // margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent:'center',
  },
  movieImageBg: {
    width: 53,
    height: 81,
    // backgroundColor:'red',
  },
  textStyle: {
    flex: 1,
    // height: 81,
  },
  titleStyle: {
    // flex: 1,
    // height:40,
    // width:100,
    textAlign: 'center',
    // backgroundColor: 'blue',
    // alignItems:'center'

  },
  yearStyle: {
    // height:40,
    // flex: 1,
    textAlign: 'center',
    // backgroundColor: 'red',
    // alignItems: 'center',
  },
  listStyle:{
    marginTop:0.5,
  }
});


