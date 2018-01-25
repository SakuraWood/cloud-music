import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class SlideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={styles.drawer} />;
  }
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#CF9896",
    width: width,
    height: height,
    flexDirection: "column"
  }
});

export function mapStateToProps({ users }, props) {}
