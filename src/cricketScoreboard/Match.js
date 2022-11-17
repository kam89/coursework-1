import { Component } from "react";
import TeamScore from "./TeamScore";

export default class Match extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 style={{ justifySelf: "center" }}>{this.props.data.matchName}</h2>
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          <TeamScore name={this.props.data.teamA} />
          <p style={{ display: "inline" }}>VS</p>
          <TeamScore name={this.props.data.teamB} />
        </div>
      </div>
    );
  }
}
