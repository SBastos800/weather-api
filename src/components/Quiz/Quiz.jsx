import React, { Component } from "react";
import styles from "./Quiz.module.scss";

export default class Quiz extends Component {

    confirmAnswer = () => {
        const result = document.getElementById('result');
        const submit = document.getElementById('submit');
        let response = document.querySelector('.response');
        submit.onclick = (e) => {
            e.preventDefault();
            if (result.value === "Martin Peters") {
                response.innerHTML += "Congratulations!! You Guessed it!"
            } else {
                response.innerHTML += "Ops...not quite...keep trying!"
            }
        }
    }

    render() {
        return (
            <section className={styles.quizContain}>
                <div className={styles.quizWrap}>
                    <div className={styles.questionContain}>
                    Geoff Hurst famously scored a hatrick in England’s 4-2 win over West Germany in the 1966 World Cup final. Who scored the other goal for England?
                    </div>
                    <div className={styles.mid}>
                        <input className={styles.answer} type="text" id="result" placeholder="Write your answer here" />
                        <input type="submit" id="submit" className={styles.button} onClick={this.confirmAnswer} />
                    </div>
                    <div class="response"></div>
                    <div className={styles.hint}>
                        Hint: <span>You have to write the first and last name</span>.
                    </div>
                    <button onClick={() => window.location.reload(false)}>Try again!</button>
                </div>
            </section>
        )
    }
}