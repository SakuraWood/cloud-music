import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import VideoProgressBar from './../../../components/VideoProgressBar';

const { height, width } = Dimensions.get('window');

class PlayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: 'undefined',
      songPic: require('./../../../assets/img/Koala.jpg'),
      songInfo: {
        time: '4:30',
        author: 'leesure',
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Image
            style={styles.back}
            source={require('./../../../assets/img/back.png')}
          />
          <Text style={styles.text}>{this.state.songName}</Text>
          <Image
            style={styles.category}
            source={require('./../../../assets/img/category_black.png')}
          />
        </View>
        <View style={styles.songInfo}>
          <Image source={this.state.songPic} style={styles.pic} />
          <Text>{this.state.songName}</Text>
          <Text>{this.state.songInfo.author}</Text>
        </View>
        <VideoProgressBar style={styles.progressbar} songInfo={this.state.songInfo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#aea',
  },
  title: {
    width,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  back: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 18,
  },
  category: {
    width: 30,
    height: 30,
  },
  songInfo: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic: {
    width: 180,
    height: 180,
    // 设置图片填充模式
    resizeMode: 'cover',
    // 设置圆角
    borderRadius: 90,
    // 设置图片位置
  },
  progressbar: {
    bottom: 30,
  },
});

export default PlayContainer;
