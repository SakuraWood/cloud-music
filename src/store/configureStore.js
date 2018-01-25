import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import promiseMiddleware from "./promiseMiddleware";
import asyncActionCallbackMiddleware from "./asyncActionCallbackMiddleware";
import utilsMiddleware from "./utilsMiddleware";
import minPendingTimeMiddleware from "./minPendingTime";
import syncReducerToAsyncStorage from "./syncReducerToAsyncStorage";

import reducers from "../reducers";

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true
});

const middlewares = [
  thunkMiddleware,
  promiseMiddleware,
  asyncActionCallbackMiddleware,
  minPendingTimeMiddleware,
  utilsMiddleware,
  syncReducerToAsyncStorage
];

if (isDebuggingInChrome) {
  middlewares.push(logger);
}

export default function configureStore(initialState) {
  const store = applyMiddleware(...middlewares)(createStore)(
    reducers,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("./../reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}
