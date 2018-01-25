import * as types from "./actionTypes";

export default function(state = null, action) {
  switch (types) {
    case types.CLOSE_APP:
      return {};
    default:
      return state;
  }
}
