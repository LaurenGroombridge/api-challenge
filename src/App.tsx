import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

class App extends Component {
  public render() {
    return <Provider store={store} />;
  }
}

export default App;
