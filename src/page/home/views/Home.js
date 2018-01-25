import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Title from "./Title";
import Recommend from "./Recommend";

const { width, height } = Dimensions.get("window");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.home}>
        <Title />
        <Recommend />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#2A2B33",
    width: width,
    height: height,
    flexDirection: "column"
  }
});

export function mapStateToProps({ users }, props) {}
