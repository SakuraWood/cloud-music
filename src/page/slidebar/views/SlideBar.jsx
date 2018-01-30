import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Platform,
  FlatList,
} from 'react-native';

// 此句在移动端未生效
if (Platform.OS !== 'web') {
  const BlurView = require('react-native-blur');
}
const BlurView = require('react-native-blur');

const { width, height } = Dimensions.get('window');

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
    } else {
      this.renderMobile();
    }
  }
}

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideState: props.slidestate,
      menuData: [
        {
          id: 'login',
          text: 'Login',
          src: require('./../../../assets/img/log-in.png'),
        },
        {
          id: 'setting',
          text: 'Setting',
          src: require('./../../../assets/img/setting.png'),
        },
      ],
      user: {
        pic: require('../../../assets/img/tabbar_user.png'),
        name: 'SakuraWood',
      },
    };
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={item.src} style={styles.itempic} />
        <Text style={styles.itemtext}>{item.text}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.drawer}>
        <View style={styles.user}>
          <Image style={styles.userpic} source={this.state.user.pic} />
          <Text style={styles.username}>{this.state.user.name}</Text>
        </View>
        <View style={styles.menu}>
          <FlatList data={this.state.menuData} renderItem={this._renderItem} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#CF9896',
    width: width,
    height: height,
    opacity: 0.6,
    flexDirection: 'column',
  },
  user: { flexDirection: 'row' },
  userpic: { width: 60, height: 60, marginLeft: 10, marginTop: 10 },
  username: {
    fontSize: 20,
    height: 60,
    lineHeight: 60,
    marginLeft: 10,
    marginTop: 10,
  },
  menu: {
    overflow: 'scroll',
  },
  item: { flexDirection: 'row', height: 40 },
  itempic: {
    height: 35,
    width: 35,
  },
  itemtext: {
    fontSize: 15,
  },
});

export function mapStateToProps({ users }, props) {}
