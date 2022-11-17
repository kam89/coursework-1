import { Component } from 'react';

export default class TeamScore extends Component {
  constructor(props) {
    super(props);
    this.state = { runs: 0, wickets: 0, name: this.props.name };
  }

  increaseRun = (number) => {
    this.setState({ runs: this.state.runs + number });
  };

  increaseWicket = (number) => {
    this.setState({ wickets: this.state.wickets + number });
  };

  onNameChange = () => {
    let newName = prompt("Enter new name:");
    this.setState({ name: newName });
  };

  render() {
    return (
      <div style={{ border: "1px solid", borderRadius: 5, borderBlockStyle: 'solid', margin: 10, padding: 10 }}>
        <div>
          <h3>Team Name: {this.state.name}<p style={{ display: "inline" }} onClick={this.onNameChange}> ✏️</p></h3>
          <p>Runs: {this.state.runs}</p>
          {this.state.wickets < 10 &&
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button onClick={() => this.increaseRun(1)}>1 Run</button>
              <button onClick={() => this.increaseRun(4)}>4 Runs</button>
              <button onClick={() => this.increaseRun(6)}>6 Runs</button>
            </div>
          }
        </div>
        <div>
          <p>Wickets: {this.state.wickets}</p>
          {this.state.wickets < 10 ?
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button onClick={() => this.increaseWicket(1)}>Wicket</button>
            </div>
            :
            <p style={{ color: "red" }}>All out</p>
          }
        </div>
      </div >
    );
  }
}