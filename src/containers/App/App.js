import React, { Component } from 'react';
import styles from "./App.module.scss";
import NavBar from "../../components/NavBar";
import Routes from "../../routes/Routes";


export default class App extends Component{
  render() {
    return(
      <section className={styles.app}>
        <NavBar />
        <Routes />
      </section>
    );
  }
}
