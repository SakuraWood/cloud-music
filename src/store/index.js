import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Platform } from 'react-native';
import { createLogger } from 'redux-logger';
import sagas from '../sagas';
import rootReducer from '../reducers';

let composeEnhancers = compose;
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

if (__DEV__) {
  // tslint:disable-next-line:no-var-requires
  const { composeWithDevTools } = require('remote-redux-devtools');
  const config = {
    // realtime: true,
    name: Platform.OS,
    hostname: 'localhost',
    port: 3000,
  };

  composeEnhancers = composeWithDevTools(config);
}

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, createLogger()),
);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  sagaMiddleware.run(sagas);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}
