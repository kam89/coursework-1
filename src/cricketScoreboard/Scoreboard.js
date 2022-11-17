import { Component } from "react";
import Match from "./Match";

export default class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = { match: [{ matchName: "World Cup 2022", teamA: "Tiger", teamB: "Dumb" }] };
  }

  addMatch = () => {
    let newMatchName = prompt("Enter the new match name");
    let newTeamA = prompt("Enter first team name");
    let newTeamB = prompt("Enter second team name");
    let matches = this.state.match;
    matches.push({ matchName: newMatchName, teamA: newTeamA, teamB: newTeamB });
    this.setState({ match: matches });
  };

  render() {
    return (
      <div>
        <h1>Crickets around the world</h1>
        <hr />
        <div>
          {this.state.match?.map((item) => <Match data={item} />)}
        </div>
        <button onClick={this.addMatch}>Add Match</button>
      </div>
    );
  }
}