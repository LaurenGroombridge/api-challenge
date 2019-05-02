import * as React from "react";
import styles from "./bookCard.module.scss";
import { IBook } from "../../reducers/bookReducer";

export interface IProps {
  book: IBook;
}

export interface IState {}

class BookCard extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <div className={styles.card}>
        <img
          src={this.props.book.volumeInfo.imageLinks.thumbnail}
          className={styles.picture}
        />{" "}
        <div className={styles.details}>
          <ul>
            <li>Title: {this.props.book.volumeInfo.title}</li>
            <li>Age: "</li>
            <li>Number of pages: {this.props.book.volumeInfo.pageCount}</li>
            <li>Synopsis: "</li>
            <li>Page Number: "</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BookCard;
