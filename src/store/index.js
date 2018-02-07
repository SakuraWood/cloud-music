import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { Platform } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { navMiddleware } from './../util/routerHelper';
import sagas from '../sagas';
import reducers from '../reducers';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});
const sagaMiddleware = createSagaMiddleware(sagas);
const middlewares = [sagaMiddleware];
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

middlewares.push(logger);
middlewares.push(navMiddleware);

if (!isDebuggingInChrome) {
  console.log('nothing to do');
} else {
  const { composeWithDevTools } = require('remote-redux-devtools');
  const config = {
    realtime: true,
    name: Platform.OS,
    hostname: 'localhost',
    port: 5678,
  };

  composeEnhancers = composeWithDevTools(config);
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    enhancer,
    window.devToolsExtension && window.devToolsExtension(),
  );

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}
