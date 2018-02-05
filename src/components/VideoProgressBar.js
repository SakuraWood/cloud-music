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
      <View>
        <View>
          <Text>{this.state.currentPlayTime}</Text>
          <View style={styles.progerss}>
            <TouchableOpacity {...this._dragBar.panHandlers}>
              <View style={styles.bar} />
            </TouchableOpacity>
          </View>
          <Text>{this.state.songInfo.time}</Text>
        </View>
        <View>
          <Image source={require('./../assets/img/backward.png')} />
          <Image source={this.state.playOrPause} />
          <Image source={require('./../assets/img/forward.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progerss: {
    width: 300,
    height: 10,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: '#fff',
  },
  bar: {
    width: 6,
    height: 10,
    backgroundColor: this.state.bg,
    left: this.state.left,
  },
});

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VideoProgressBar);
