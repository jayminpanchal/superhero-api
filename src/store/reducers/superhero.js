import {
  SEARCH_SUPERHEROS_WATCHER,
  SEARCH_SUPERHEROS_SUCCESS,
  SEARCH_SUPERHEROS_FAILURE,
  GET_SUPERHERO_PROFILE_FAILURE,
  GET_SUPERHERO_PROFILE_SUCCESS,
  GET_SUPERHERO_PROFILE_WATCHER,
} from "../constants";

const initialState = {
  superheros: [],
  searchSuperHerosError: null,
  superHeroProfile: null,
  getSuperHeroProfileError: null,
};

export default function SuperHero(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUPERHEROS_WATCHER:
    case GET_SUPERHERO_PROFILE_WATCHER:
      return {
        ...state,
      };
    case SEARCH_SUPERHEROS_SUCCESS:
      return {
        ...state,
        superheros: action.payload || [],
      };
    case SEARCH_SUPERHEROS_FAILURE:
      return {
        ...state,
        superheros: [],
        searchSuperHerosError: action.payload,
      };
    case GET_SUPERHERO_PROFILE_SUCCESS:
      return {
        ...state,
        superHeroProfile: action.payload,
      };
    case GET_SUPERHERO_PROFILE_FAILURE:
      return {
        ...state,
        getSuperHeroProfileError: action.payload,
      };
    default:
      return state;
  }
}
