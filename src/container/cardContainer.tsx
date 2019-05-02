import * as React from "react";
import BookCard from "../components/bookCard";
import styles from "./cardContainer.module.scss";
import { connect } from "react-redux";
import { fetchBooks, IBook } from "../reducers/bookReducer";
import { IStore } from "../reducers";

export interface IReduxProps {
  fetchBooks: (authorName: string) => void;
  books: IBook[];
}

export interface IReactProps {}

export interface IState {
  authorName: string;
}

class CardContainer extends React.Component<IReactProps & IReduxProps, IState> {
  public state = {
    authorName: "Jane Austen"
  };

  public componentDidMount = () => {
    this.props.fetchBooks(this.state.authorName);
  };

  // state = { :  }
  public render() {
    console.log(this.props.books);
    return (
      <React.Fragment>
        <header className="App-header">
          <h1>My Library</h1>
        </header>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search.." />
        </div>
        <div className="App">
          {this.props.books.map((eachBook, index) => (
            <BookCard key={index} book={eachBook} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IStore, props: IReactProps) => {
  return {
    books: state.books.books
  };
};

const mapDispatchToProps = { fetchBooks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
