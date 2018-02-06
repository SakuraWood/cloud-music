import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Nav from './router';
// import Play from './page/play/views/PlayContainer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
);

// const App = () => <Play />;

export default App;
