import React, { Component } from 'react';
import { Platform } from 'react-native';
import BlurView from 'react-native-blur';
import Menu from './Menu';

export default class SlideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderMobile = () => {
    return (
      <BlurView blurType="light" blurAmount={10}>
        <Menu slidestate={this.state} />
      </BlurView>
    );
  };

  render() {
    if (Platform.OS === 'web') {
      return <Menu slidestate={this.state} />;
    }
    return this.renderMobile();
  }
}

export function mapStateToProps({ users }, props) {}
