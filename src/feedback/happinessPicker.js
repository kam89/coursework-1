import { Component } from "react";
import './happinesspicker.css';
export default class HappinessPicker extends Component {
  render() {
    const value = this.props.value;
    const name = this.props.name;
    const emojiScores = ['😦', '😞', '😐', '🙂', '😁'];


    return <span className="emoji-buttons">
      {
        emojiScores.map((item, index) => <button className={value === index ? "selected" : ""} key={index} onClick={() => this.props.onClick(name, index)}>{item}</button>)
      }
    </span>;
  }
}