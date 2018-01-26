/**
 * Created by Simin on 2018/1/26.
 */
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class TabBar extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.tabWarpper}>
        <Image
          style={styles.tabBarIcon}
          source={require("./../../../assets/img/Category.png")}
        />
        <Image
          style={styles.tabBarIcon}
          source={require("./../../../assets/img/Category.png")}
        />
        <Image
          style={styles.tabBarIcon}
          source={require("./../../../assets/img/Category.png")}
        />
        <Image
          style={styles.tabBarIcon}
          source={require("./../../../assets/img/Category.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabWarpper: {
    width: width,
    height: 100,
//    position: fixed,
    left: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tabBarIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10
  }
});

export function mapStateToProps({ users }, props) {}
