/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '2015', posters: {thumbnail: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1609/27/c0/27587202_1474952311163_800x600.jpg'}},
];

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


class HelloWorldApp extends Component {
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});


AppRegistry.registerComponent('RnProject', () => HelloWorldApp);
