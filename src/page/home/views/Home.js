import React, { Component } from "react";
import Drawer from "react-native-drawer";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Title from "./Title";
import Recommend from "./Recommend";
import SlideBar from "./../../slidebar/views/SlideBar";

const { width, height } = Dimensions.get("window");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  closeSlideBar = () => {
    this._drawer.close();
  };
  openSlideBar = () => {
    this._drawer.open();
  };

  render() {
    return (
      <Drawer
        ref={ref => (this._drawer = ref)}
        content={<SlideBar />}
        openDrawerOffset={0.35}
      >
        <View style={styles.home}>
          <Title ref="category" />
          <Recommend />
        </View>
      </Drawer>
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
