import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store"
import Nav from '../src/Components/Nav/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Nav />
      </Provider>
    );
  }

}

export default App;
