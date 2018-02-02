import { createAction } from 'redux-actions';
import * as types from './actionTypes';

export const routerBack = createAction(types.ROUTER_BACK, () => {
  return {};
});

export const routerGo = createAction(types.ROUTER_GO, routerObj => routerObj);
