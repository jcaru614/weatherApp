import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store"
import Nav from '../src/Components/Nav/index'
import "./App.css";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
        <Nav />
        </div>
      </Provider>
    );
  }

}

export default App;
