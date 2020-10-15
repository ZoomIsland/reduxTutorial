import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initializeSagaMiddleWare = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(forbiddenWordsMiddleware, initializeSagaMiddleWare))
);

initializeSagaMiddleWare.run(apiSaga);
// store can also take initial state to do state preloading or server side rendering

export default store;