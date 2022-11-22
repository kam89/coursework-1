import { Component } from "react";
import './todo.css';

export default class Todo extends Component {
  render() {
    return (
      <div className="todoContainer">
        <div>
          <p className={this.props.complete ? "complete" : "normal"}>Todo #{this.props.index + 1}: {this.props.todo} </p>
          {this.props.urgent &&
            <p className="urgentContainer" style={{ color: "red" }}>Urgent</p>
          }
        </div>
        <button onClick={() => this.props.onComplete(this.props.index)}>Complete</button>
      </div>
    );
  }
}