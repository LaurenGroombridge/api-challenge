import * as React from "react";
// import BookCard from "../components/bookCard";
import styles from "./cardContainer.module.scss";
import App from "../App";

export interface IProps {}

export interface IState {}

class CardContainer extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return <App />;
  }
}

export default CardContainer;
