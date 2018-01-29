import React, { PureComponent } from 'react';
import { StyleSheet, View, Image, Dimensions, FlatList } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Recommend extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        require('./../../../assets/img/Chrysanthemum.jpg'),
        require('./../../../assets/img/Desert.jpg'),
        require('./../../../assets/img/Jellyfish.jpg'),
        require('./../../../assets/img/Koala.jpg'),
        require('./../../../assets/img/Hydrangeas.jpg'),
      ],
    };
  }

  _renderItem = ({ item }) => {
    return <Image style={styles.recommendImg} source={item} />;
  };

  render() {
    return (
      <View style={styles.recommendContainer}>
        <View style={styles.recommendTop}>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            horizontal
          />
        </View>
        <View style={styles.recommendMiddle}>
          <FlatList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recommendContainer: {
    width,
    height,
    flexDirection: 'row',
  },
  recommendTop: {
    height: 200,
    borderRadius: 8,
    margin: 20,
    backgroundColor: 'white',
  },
  recommendMiddle: {
    width,
    height: 240,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  recommendImg: {
    width: 300,
    height: 200,
    borderRadius: 8,
    borderWidth: 0,
    flexDirection: 'row',
  },
});

export function mapStateToProps({ users }, props) {}
