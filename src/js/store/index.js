import { createStore } from "redux";
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);
// store can also take initial state to do state preloading or server side rendering

export default store;