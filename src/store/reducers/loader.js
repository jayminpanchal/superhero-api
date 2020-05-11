import { SHOW_LOADER, HIDE_LOADER } from "../constants";

const initialState = {
  isLoader: false,
};

export default function SuperHero(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoader: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoader: false,
      };
    default:
      return state;
  }
}
