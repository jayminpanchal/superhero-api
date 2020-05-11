import { combineReducers } from "redux";
import SuperHero from "./superhero";
import Loader from "./loader";

const rootReducer = combineReducers({ SuperHero, Loader });

export default rootReducer;
