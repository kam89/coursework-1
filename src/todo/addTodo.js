import { Component } from "react";
import "./addTodo.css";
export default class AddTodo extends Component {

  render() {
    return (
      <div className="mainContainer">
        <input onChange={this.props.onTyping} value={this.props.inputTextValue} />
        <div style={{ marginTop: 5, marginBottom: 5 }}>
          <input type={"checkbox"} onChange={this.props.onUrgentTicked} value={this.props.urgent} />
          <label>Urgent</label>
        </div>
        <button onClick={this.props.onPost}>Add New Todo</button>
      </div>
    );
  }
}