import { handleActions } from 'redux-actions';
import { navigator, back } from './../util/routerHelper';
import AppNavigator from './router';
import * as types from './actionTypes';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Search'),
);

export default handleActions(
  {
    [types.ROUTER_GO]: (state, action) => {
      const newState = AppNavigator.router.getStateForAction(
        navigator(action.payload),
        state,
      );
      return newState || state;
    },
    [types.ROUTER_BACK]: state => {
      const newState = AppNavigator.router.getStateForAction(back(), state);
      return newState || state;
    },
  },
  initialState,
);
