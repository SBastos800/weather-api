import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Card from "./Card/Card";

export default class CardList extends Component {
    state = {
        allCities: [],
        cityName: [ "2643744,", "4749005,", "4219762"],
        cities: [],
        thecities: []
    }
    componentDidMount() {
        let string = "";
        this.state.cityName.forEach(city => string += `${city}`)
        console.log(`api.openweathermap.org/data/2.5/group?id=${string}&appid=0f33f5c78acf44e7d38b5f6706f6f59d`)
        fetch(`https://api.openweathermap.org/data/2.5/group?id=${string}&appid=0f33f5c78acf44e7d38b5f6706f6f59d`)
            .then(response => response.json())
            .then(cities => {
                this.setState({
                    thecities: cities.list
                });
            })
    }

    render() {
        console.log(this.state.filteredcities)
        return (
            <>
            <section className={styles.cardListWrapper}>
              {this.state.thecities.map((city, index) => (
                  <div>
                      <Card city={city}  key={index}/>
                  </div>
              ))}
            </section>
            </>
        )
    }
}