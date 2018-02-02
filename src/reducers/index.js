import { combineReducers } from 'redux';
import search from './../page/search/reducer';
import router from './../router/reducer';

export default combineReducers({
  search,
  router,
});
