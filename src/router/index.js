import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import RootRouter from './router';
import { routerBack, routerGo } from './actions';
import { navAddListener } from './../util/routerHelper';

const Router = props => {
  const { navigationState, dispatch } = props;
  return (
    <RootRouter
      navigation={addNavigationHelpers({
        dispatch,
        state: navigationState,
        navAddListener,
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
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
