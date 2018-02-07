import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Nav from './router';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
);

export default App;
