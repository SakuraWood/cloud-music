import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Text,
  Image,
} from 'react-native';

class VideoProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: 0,
      songInfo: props.songInfo,
      left: 0,
      bg: 'white',
      currentPlayTime: 0,
      playOrPause: require('./../assets/img/play.png'),
    };
  }

  componentWillMount() {
    this._dragBar = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this._left = this.state.left;
        this.setState({ bg: 'red' });
      },
      onPanResponderMove: (evt, gs) => {
        this.setState({
          left: this._left + gs.dx,
        });
      },
      onPanResponderRelease: (evt, gs) => {
        this.setState({
          bg: 'white',
          left: this._left + gs.dx,
        });
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timeprogress}>
          <Text style={styles.current}>{this.state.currentPlayTime}</Text>
          <View style={styles.progerss}>
            <TouchableOpacity {...this._dragBar.panHandlers}>
              <View style={styles.bar} />
            </TouchableOpacity>
          </View>
          <Text style={styles.time}>{this.state.songInfo.time}</Text>
        </View>
        <View style={styles.playkey}>
          <Image
            source={require('./../assets/img/backward.png')}
            style={styles.backward}
          />
          <Image source={this.state.playOrPause} style={styles.play} />
          <Image
            source={require('./../assets/img/forward.png')}
            style={styles.forward}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flexDirection: 'column', alignItems: 'center', bottom: 30 },
  timeprogress: {
    flex: 1,
    flexDirection: 'row',
  },
  current: {
    fontSize: 18,
  },
  progerss: {
    width: 300,
    height: 10,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: '#000',
  },
  bar: {
    width: 6,
    height: 10,
    backgroundColor: '#aea',
  },
  time: {
    fontSize: 18,
  },
  playkey: {
    flex: 1,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backward: { width: 30, height: 30 },
  play: { width: 35, height: 35 },
  forward: { width: 30, height: 30 },
});

export default VideoProgressBar;
