/**
 * Created by Simin on 2018/1/26.
 */
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class TabBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      testNum: 123456
    };
  }

  _musicMenu = () => {
    this.state.testNum++;
  };

  render() {
    return (
      <View style={styles.tabWarpper}>
        {/*<Text>测试数字变化：{this.state.testNum}</Text>*/}
        <Image
          onPress={this._musicMenu}
          style={styles.tabBarIcon}
          source={require("./../../../assets/img/music.png")}
        />
        <Image
          style={styles.tabBarIcon}
          source={require("./../../../assets/img/history.png")}
        />
        <Image
          style={styles.tabBarIcon}
          source={require("./../../../assets/img/tabbar_related.png")}
        />
        <Image
          style={styles.tabBarIcon}
          source={require("./../../../assets/img/tabbar_user.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabWarpper: {
    width: width,
    height: 80,
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "#2A2B33",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tabBarIcon: {
    width: 25,
    height: 25,
    marginTop: 14,
    marginHorizontal: 30
//    flexGrow: 0,
//    flexShrink: 0,
//    flexBasis: 10
//    marginHorizontal: 10
  }
});

export function mapStateToProps({ users }, props) {}
