import {
    SEARCH_SUPERHEROS_FAILURE, SEARCH_SUPERHEROS_SUCCESS, SEARCH_SUPERHEROS_WATCHER,
    GET_SUPERHERO_PROFILE_FAILURE, GET_SUPERHERO_PROFILE_SUCCESS, GET_SUPERHERO_PROFILE_WATCHER
} from '../constants';


export function searchSuperHerosWatcher(payload) {
    return { type: SEARCH_SUPERHEROS_WATCHER, payload };
}

export function searchSuperHerosSuccess(payload) {
    return { type: SEARCH_SUPERHEROS_SUCCESS, payload };
}

export function searchSuperHerosError(payload) {
    return { type: SEARCH_SUPERHEROS_FAILURE, payload };
}

export function getSuperHeroProfileWatcher(payload) {
    return { type: GET_SUPERHERO_PROFILE_WATCHER, payload };
}

export function getSuperHeroProfileSuccess(payload) {
    return { type: GET_SUPERHERO_PROFILE_SUCCESS, payload };
}

export function getSuperHeroProfileError(payload) {
    return { type: GET_SUPERHERO_PROFILE_FAILURE, payload };
}

