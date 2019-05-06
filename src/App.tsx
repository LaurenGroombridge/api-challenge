import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Header from "./components/Header/header";
import BookContainer from "./components/bookContainer/bookContainer";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <Header />
        <main>
          <BookContainer />
        </main>
      </Provider>
    );
  }
}

export default App;
