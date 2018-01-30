import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSongs, getUser, startSearch } from './../actions';

class Search extends Component {
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
      <TextInput style={styles.search} onChangeText={this._onChangeText} />
    );
  }
}

/* props验证 */
Search.propTypes = {
  startSearch: PropTypes.func.isRequired,
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
}))(Search);
