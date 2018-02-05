import React, { Component } from 'react';
import { connect } from 'redux';
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
      songName: undefined,
      songPic: require('./../../../assets/img/Koala.jpg'),
      songInfo: undefined,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableOpacity onPress={this._openSlideBar}>
            <Image
              style={styles.back}
              source={require('./../../../assets/img/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{this.state.songName}</Text>
          <Image
            style={styles.category}
            source={require('./../../../assets/img/Category.png')}
          />
        </View>

        <View>
          <Image source={this.state.songPic} style={styles.pic} />
        </View>
        <VideoProgressBar songInfo={this.state.songInfo} />
      </View>
    );
  }
}

const styles = StyleSheet.creat({
  container: {
    height,
    width,
    flexDirection: 'column',
  },
  title: {
    width,
    height: 30,
  },
  back: {
    width: 30,
    height: 30,
  },
  category: {
    width: 30,
    height: 30,
  },
  pic: {
    width: 80,
    height: 80,
    // 设置图片填充模式
    resizeMode: 'cover',
    // 设置圆角
    borderRadius: 40,
    // 设置图片位置
  },
});

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PlayContainer);
