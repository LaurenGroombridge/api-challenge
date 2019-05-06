import * as React from "react";
import Book from "../book/book";
import { IBook } from "../../reducers/bookReducer";

export interface IProps {}

export interface IState {
  // books: IBook;
}

class BookContainer extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <section>
        <Book />
      </section>
    );
  }
}

export default BookContainer;
