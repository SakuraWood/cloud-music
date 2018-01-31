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
    this.state = {
      searchSongsList: props.songList,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ searchSongsList: nextProps.songList });
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        style={styles.flatList}
        data={this.state.searchSongsList}
        renderItem={this._renderItem}
      />
    );
  }
}

/* props验证 */
SearchPreview.propTypes = {
  songList: PropTypes.arrayOf(PropTypes.object).isRequired,
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
