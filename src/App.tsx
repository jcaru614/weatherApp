import React, { Component } from 'react';
import Home from './Components/Home/index';
import { Provider } from "react-redux";
import store from "./store"

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
