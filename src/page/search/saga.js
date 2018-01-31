import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import axios from 'axios';
import { GET_SONGS, GET_USERS, START_SEARCH } from './actionTypes';
import { getUser, getSongs } from './actions';

export function* getSongInfo(id) {
  
  try {
    console.log(id);
    const response = yield call(
      axios.get,
      `http://45.32.81.42:4000/id?keywords= ${id}`,
    );
    console.log(response);
    yield put(getSongs(response.data.result.songs[0].album.id));
  } catch (e) {
    console.log(e);
  }
}

export function* searchSongList(text) {
  try {
    console.log(text);
    const response = yield call(
      axios.get,
      `http://45.32.81.42:4000/search?keywords= ${text}`,
    );
    console.log(response);
    yield put(getSongs(response.data.result.songs[0].album.id));
  } catch (e) {
    console.log(e);
  }
}

export function* getUserInfo(id) {
  try {
    yield put(getUser(id));
  } catch (e) {
    console.log(e);
  }
}

export default function* search() {
  try {
    yield all([
      takeEvery(GET_SONGS, getSongInfo),
      takeEvery(GET_USERS, getUserInfo),
      takeEvery(START_SEARCH, searchSongList),
    ]);
  } catch (e) {
    console.log(e);
  }
}
