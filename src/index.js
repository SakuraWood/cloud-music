import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
// import Home from './page/search/views/SearchContainer';
import Router from './router';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
