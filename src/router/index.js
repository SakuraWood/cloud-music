import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import RootNavigator from './router';

class Router extends Component {
  render() {
    return <RootNavigator navigation={addNavigationHelpers({})} />;
  }
}
