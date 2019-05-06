import * as React from "react";
import { IBook } from "../../reducers/bookReducer";
import styles from "./book.module.scss";

export interface IProps {
  //   book: IBook;
}

export interface IState {}

class Book extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <article className={styles.book}>
        <h2>ujiyrsegjkugthrkesuyg</h2>
        <img
          src={
            "https://www.thehappycatsite.com/wp-content/uploads/2017/11/kitten-tabby.jpg"
          }
          alt="#"
        />
        <p>uykgstruytgeusysuy</p>
      </article>
    );
  }
}

export default Book;
