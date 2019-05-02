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
          <h1>My Library placeholder</h1>
        </header>
        <div className="searchBar">
          <input type="text" placeholder="Search.." />
        </div>
        <div className="App">
          <BookCard author={"Jane Austen"} />
          {/* <BookCard />
          <BookCard /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
