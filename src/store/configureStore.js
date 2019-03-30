import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import viewportReducer from "../reducers/viewport";
import serviceWorkerReducer from "../reducers/serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      viewport: viewportReducer,
      serviceWorker: serviceWorkerReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
