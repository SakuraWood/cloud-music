import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Home from "./page/home/views/Home";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
