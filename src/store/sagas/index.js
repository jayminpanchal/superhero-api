import { all } from 'redux-saga/effects';
import {
    searchSuperHerosActionWatcher,
    getSuperHeroProfileActionWatcher
} from './superhero';

export default function* rootSaga() {
    yield all([
        searchSuperHerosActionWatcher(),
        getSuperHeroProfileActionWatcher()
    ]);
}
