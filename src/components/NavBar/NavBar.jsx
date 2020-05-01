import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import NavItem from "./NavItem/NavItem"; 

export default class NavBar extends Component {
    render() {
        return(
            <nav className={styles.navBarWrapper}>
                <ul className={styles.navList}>
                    <NavItem route="cards" name="Cards" />
                    <NavItem route="quiz" name="Quiz" />
                    <NavItem route="football" name="Football Team" />
                </ul>
            </nav>
        );
    }
}