import { all, fork } from 'redux-saga/effects';
import search from './../page/search/saga';

export default function* root() {
  try {
    yield all([fork(search)]);
  } catch (e) {
    console.log(e);
  }
}
