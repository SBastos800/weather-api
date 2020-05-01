import React, { Component } from "react";
import styles from "./router.module.scss";
import { Router, Redirect, globalHistory } from "@reach/router";
import CardList from "../components/CardList";
import Quiz from "../components/Quiz";


export default class Routes extends Component {
    render() {
        return(
            <Router className={styles.container}>
                <CardList path="cards" />
                <Quiz path="quiz" />
            </Router>
        );
    }
}
