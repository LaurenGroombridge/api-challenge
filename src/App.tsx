import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import CardContainer from "./container/cardContainer";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <CardContainer />
      </Provider>
    );
  }
}

export default App;
