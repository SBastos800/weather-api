import React, { Component } from "react";
import styles from "./Card.module.scss";


export default class Card extends Component {

    convertkelvinToCelsius = (kelvin) => {
        let celsius = kelvin - 273.15;
        celsius = Number.parseFloat(celsius).toFixed(2);
        return celsius;
    }
    render() {
        return (
                <section className={styles.cardWrapper}>
                    <div className={styles.content}>
                        <p>Temperature: {this.convertkelvinToCelsius(this.props.city.main.temp)} &deg;C</p>
                        <p>Humidity: {this.props.city.main.humidity} %</p>
                        <p>Minimum Temperature: {this.convertkelvinToCelsius(this.props.city.main.temp_min)} &deg;C</p>
                        <p>Maximum Temperature: {this.convertkelvinToCelsius(this.props.city.main.temp_max)} &deg;C</p>
                    </div>
                    <div className={styles.cityName}>
                        <p>{this.props.city.name}</p>
                    </div>
                </section>
        );
    }
}