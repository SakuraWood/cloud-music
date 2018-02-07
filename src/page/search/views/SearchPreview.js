import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

export default class SearchPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps(nextProps) {
    console.log('子组件新的状态');
    console.log(nextProps);
  }
  _renderItem = ({ item, goPlay }) => {
    return (
      <TouchableOpacity onPress={goPlay}>
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        style={styles.flatList}
        data={this.props.songList}
        renderItem={this._renderItem(this.props.goPlay)}
      />
    );
  }
}

/* props验证 */
SearchPreview.propTypes = {
  songList: PropTypes.arrayOf(PropTypes.object).isRequired,
  goPlay: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  flatList: {
    width,
    marginRight: 20,
  },
  item: {
    backgroundColor: '#000',
    height: 20,
    color: '#fff',
  },
});
