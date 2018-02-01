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

  componentWillMount() {
    console.log('组件准备创建');
  }

  componentDidMount() {
    console.log('组件创建好了');
  }

  componentWillReceiveProps(nextProps) {
    console.log('父组件新的状态');
    console.log(nextProps);
  }

  // shouldComponentUpdate() {
  //   console.log('组件应当更新');
  //   return true;
  // }

  componentWillUpdate() {
    console.log('组件准备更新');
  }

  componentDidUpdate() {
    console.log('组件更新完成');
  }

  componentDidCatch(error, info) {
    this.setState({ text: '' });
    console.log(error);
    console.log(info);
  }

  _onChangeText = text => {
    this.setState({ text }, () => {
      this.props.startSearch(this.state.text);
    });
  };

  render() {
    console.log('组件渲染');
    console.log(this.props);
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

/**
 * 映射state到此容器组件，每当state更新，就会执行
 * @param {*} state
 */
const mapStateToProps = state => {
  console.log('组件新的状态是啥');
  console.log(state);
  return {
    search: state.search,
  };
};

/**
 * 映射分发方法到此容器组件
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => {
  return {
    startSearch(query) {
      return dispatch(startSearch(query));
    },
    getSongs(id) {
      return dispatch(getSongs(id));
    },
    getUser(id) {
      return dispatch(getUser(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
