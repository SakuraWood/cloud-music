import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleName: "Home"
    };
  }

  render() {
    return (
      <View style={styles.title}>
        <Image
          style={styles.category}
          source={require("./../../../assets/img/Category.png")}
        />
        <Text style={styles.text}>{this.state.titleName}</Text>
        <Image
          style={styles.search}
          source={require("./../../../assets/img/search.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    width: width,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 20,
    textAlignVertical: "center",
    height: 25,
    marginTop: 8,
    color: "#ffffff"
  },
  category: {
    width: 25,
    height: 25,
    marginLeft: 10,
    marginTop: 10
  },
  search: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginRight: 10
  }
});
