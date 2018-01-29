import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { StyleSheet, View, Dimensions } from 'react-native';
import Title from './Title';
import Recommend from './Recommend';
import SlideBar from './../../slidebar/views/SlideBar';

const { width, height } = Dimensions.get('window');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openSlideBar = () => {
    this._drawer.open();
  };

  render() {
    return (
      <Drawer
        type="static"
        ref={ref => (this._drawer = ref)}
        content={<SlideBar />}
        openDrawerOffset={0.2}
        closeDrawerOffset={-3}
        panCloseMask={0.2}
      >
        <View style={styles.home}>
          <Title
            ref={ref => {
              this.category = ref;
            }}
            openSlideBar={this.openSlideBar}
            closeSlideBar={this.closeSlideBar}
          />
          <Recommend />
        </View>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#2A2B33',
    width,
    height,
    flexDirection: 'column',
  },
});

export function mapStateToProps({ users }, props) {}
