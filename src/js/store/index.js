import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from "../middleware";

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware));
// store can also take initial state to do state preloading or server side rendering

export default store;