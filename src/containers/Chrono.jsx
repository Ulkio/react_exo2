import React, { Component } from "react";
import styles from "./Chrono.module.css";

class Chrono extends Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.state = {
      time:
        this.date.getHours() +
        ":" +
        this.date.getMinutes() +
        ":" +
        this.date.getSeconds(),
      //seconds: 0,
      //minutes: 0,
    };
  }

  componentDidMount() {
    setInterval(this.changeTime, 1000);
  }

  changeTime = () => {
    this.date = new Date();
    this.setState({
      time:
        this.date.getHours() +
        ":" +
        this.date.getMinutes() +
        ":" +
        this.date.getSeconds(),
    });
  };

  // chrono() {
  //   setTimeout(() => {
  //     this.increment();
  //   }, 1000);
  // }

  // increment() {
  //   this.setState({
  //     seconds: this.state.seconds + 1,
  //   });

  //   if (this.state.seconds >= 59) {
  //     this.setState({
  //       seconds: 0,
  //       minutes: this.state.minutes + 1,
  //     });
  //   }
  // }

  render() {
    //this.chrono();

    return (
      <div className={styles.container}>
        <p>{this.state.time}</p>
        {/* {this.state.minutes < 10 ? (
          <p className={styles.Chrono}>0{this.state.minutes}</p>
        ) : (
          <p className={styles.Chrono}>{this.state.minutes}</p>
        )}

        <p> : </p>

        {this.state.seconds < 10 ? (
          <p className={styles.Chrono}>0{this.state.seconds}</p>
        ) : (
          <p className={styles.Chrono}>{this.state.seconds}</p>
        )} */}
      </div>
    );
  }
}

export default Chrono;
