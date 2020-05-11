import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import reducers from "./reducers";

import createSagaMiddleware from "redux-saga";
import dataSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(dataSaga);

export default store;
