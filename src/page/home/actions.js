import { createAction } from "redux-actions";
import * as types from "./actionTypes";

export const getHomeList = createAction(types.GET_HOME_LIST, async () => {
  return {};
});

export const getHomeAlbum = createAction(types.GET_HOME_ALBUMS, async () => {
  return {};
});
