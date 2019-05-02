import * as React from "react";
import styles from "./bookCard.module.scss";

export interface IProps {
  author: string;
}

export interface IState {}

class BookCard extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <div className={styles.card}>
        <img
          src="https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Ff96014e4-671b-11e7-9755-334d14a02d15.jpg?crop=2156%2C1213%2C147%2C489&resize=685"
          className={styles.picture}
        />{" "}
        <div className={styles.details}>
          <ul>
            <li>Author: {this.props.author}</li>
            <li>Age: "</li>
            <li>Number of pages: "</li>
            <li>Synopsis: "</li>
            <li>Page Number: "</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BookCard;
