import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSongs, getUser, startSearch } from './../actions';
import SearchPreview from './SearchPreview';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  _onChangeText = text => {
    this.setState({ text }, () => {
      this.props.startSearch(this.state.text);
    });
  };

  render() {
    return (
      <View>
        <TextInput style={styles.search} onChangeText={this._onChangeText} />
        <SearchPreview songList={this.props.search.searchSongsList} />
      </View>
    );
  }
}

/* props验证 */
SearchContainer.propTypes = {
  startSearch: PropTypes.func.isRequired,
  search: PropTypes.arrayOf(PropTypes.object),
};

SearchContainer.defaultProps = {
  search: [{ id: 1, name: 'xxoo' }, { id: 2, name: 'fuck u' }],
};

const styles = StyleSheet.create({
  search: {
    width: 300,
    height: 50,
  },
});

const mapStateToProps = state => ({
  search: state.search,
});

export default connect(mapStateToProps, dispatch => ({
  startSearch(query) {
    return dispatch(startSearch(query));
  },
  getSongs(id) {
    return dispatch(getSongs(id));
  },
  getUser(id) {
    return dispatch(getUser(id));
  },
}))(SearchContainer);
