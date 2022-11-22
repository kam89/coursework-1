import { Component } from "react";
import HappinessPicker from "./happinessPicker";

export default class OverallFeedback extends Component {

  state = {
    food: 0,
    service: 0,
    value: 0,
  };

  handleOnClick = (name, score) => {
    console.log(score, name);
    switch (name) {
      case "food":
        this.setState({ food: score });
        break;
      case "service":
        this.setState({ service: score });
        break;
      case "value":
        this.setState({ value: score });
        break;
    }
  };

  render() {
    return <div className="feedback">
      <h3>Let us know how we did!</h3>
      <p>Food</p>
      <HappinessPicker value={this.state.food} onClick={this.handleOnClick} name="food" />
      <p>Service</p>
      <HappinessPicker value={this.state.service} onClick={this.handleOnClick} name="service" />
      <p>Value for money</p>
      <HappinessPicker value={this.state.value} onClick={this.handleOnClick} name="value" />
      <p><strong>Total Score: {this.state.food + this.state.service + this.state.value}/12</strong></p>
    </div>;
  }
};