import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import BookCard from "./components/bookCard";
import cardContainer from "./container/cardContainer";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <header className="App-header">
          <h2>My Library placeholder</h2>
        </header>
        <div className="searchBar">
          {" "}
          <input type="text" placeholder="Search.." />
        </div>
        <div className="App">
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </Provider>
    );
  }
}

export default App;
