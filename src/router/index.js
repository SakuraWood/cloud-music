import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import RootNavigator from './router';
import { routerBack, routerGo } from './actions';

const Router = () => {
  const { navigationState, dispatch } = this.props;
  return (
    <RootNavigator
      navigation={addNavigationHelpers({
        dispatch,
        state: navigationState,
      })}
    />
  );
};

const mapStateToProps = state => {
  return {
    navigationState: state.router,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    routerGo(path) {
      return dispatch(routerGo(path));
    },
    routerBack(id) {
      return dispatch(routerBack(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
