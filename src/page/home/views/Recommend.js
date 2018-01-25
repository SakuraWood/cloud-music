import React, { PureComponent } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  FlatList
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class Recommend extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        require("./../../../assets/img/Chrysanthemum.jpg"),
        require("./../../../assets/img/Desert.jpg"),
        require("./../../../assets/img/Jellyfish.jpg"),
        require("./../../../assets/img/Koala.jpg"),
        require("./../../../assets/img/Hydrangeas.jpg")
      ]
    };
  }

  _renderItem = ({ item }) => {
    return <Image style={styles.recommendImg} source={item} />;
  };

  render() {
    return (
      <View>
        <FlatList
          style={styles.recommendContainer}
          data={this.state.data}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recommendContainer: {
    width: width,
    height: 120,
    overflow: "scroll",
    borderWidth: 0
  },
  recommendImg: {
    width: 100,
    height: 60,
    borderRadius: 8,
    borderWidth: 0
  }
});

export function mapStateToProps({ users }, props) {}
