import { put, takeLatest, call } from "redux-saga/effects";
import {
  SEARCH_SUPERHEROS_WATCHER,
  GET_SUPERHERO_PROFILE_WATCHER,
} from "../constants";
import {
  searchSuperHerosSuccess,
  searchSuperHerosError,
  getSuperHeroProfileError,
  getSuperHeroProfileSuccess,
  showLoader,
  hideLoader,
} from "../actions";
import axios from "../../utils/api";
import { API_URL } from "../../utils/constants";

function searchSuperHerosApi(params) {
  console.log("params ", params);
  return axios.doCall(
    params
      ? `${API_URL.SEARCH_SUPERHEROS}/${params.name}`
      : API_URL.SEARCH_SUPERHEROS,
    "get"
  );
}

function* searchSuperHerosActionEffect(action) {
  try {
    yield put(showLoader());
    const response = yield call(searchSuperHerosApi, action.payload);
    yield put(searchSuperHerosSuccess(response.data.results));
  } catch (e) {
    yield put(searchSuperHerosError(e.data));
  } finally {
    yield put(hideLoader());
  }
}

export function* searchSuperHerosActionWatcher() {
  yield takeLatest(SEARCH_SUPERHEROS_WATCHER, searchSuperHerosActionEffect);
}

function getSuperHeroProfileApi(params) {
  return axios.doCall(params.id, "get");
}

function* getSuperHeroProfileActionEffect(action) {
  try {
    yield put(showLoader());
    const response = yield call(getSuperHeroProfileApi, action.payload);
    yield put(getSuperHeroProfileSuccess(response.data));
  } catch (e) {
    yield put(getSuperHeroProfileError(e.data));
  } finally {
    yield put(hideLoader());
  }
}

export function* getSuperHeroProfileActionWatcher() {
  yield takeLatest(
    GET_SUPERHERO_PROFILE_WATCHER,
    getSuperHeroProfileActionEffect
  );
}
