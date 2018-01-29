import React, { Component } from "react";
import Drawer from "react-native-drawer";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Title from "./Title";
import Recommend from "./Recommend";
import TabBar from "./TabBar";
import SlideBar from "./../../slidebar/views/SlideBar";

const { width, height } = Dimensions.get("window");

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
//        content={<SlideBar />}
        openDrawerOffset={0.2}
        closeDrawerOffset={-3}
        panCloseMask={0.2}
      >
        <View style={styles.home}>
          <Title
            ref="category"
            openSlideBar={this.openSlideBar}
            closeSlideBar={this.closeSlideBar}
          />
          <Recommend />
          <TabBar />
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
