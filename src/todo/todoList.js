import { Component } from "react";
import AddTodo from "./addTodo";
import Todo from "./todo";

export default class TodoList extends Component {
  state = {
    todo: [],
    origTodo: [],
    newItem: {
      desc: undefined,
      urgent: false,
    },
  };

  handleInputChange = (e) => {
    this.setState({ newItem: { desc: e.target.value, urgent: this.state.newItem.urgent } });
  };

  handleOnSubmit = () => {
    console.log(this.state.newItem);
    const newTodoList = [this.state.newItem, ...this.state.todo];
    this.setState({ todo: newTodoList });
    this.setState({ newItem: { desc: "", urgent: false } });
  };

  handleClearAll = () => {
    this.setState({ todo: [] });
  };

  handleClearFirst = (index) => {
    const newTodoList = this.state.todo.splice(index, 1);
    this.setState({ todo: newTodoList });
  };

  handleonUrgentChecked = () => {
    this.setState(
      {
        newItem: {
          urgent: !this.state.newItem.urgent
        }
      });
};

handleOnComplete = (e) => {
  let updatedItem = this.state.todo[e];
  updatedItem.complete = true;
  let newTodoList = this.state.todo.slice();
  newTodoList.splice(e, 1, updatedItem);
  this.setState({ todo: newTodoList });
};

handleonDeleteCompleted = () => {
  const newTodoList = this.state.todo.filter((item) => item.complete !== true);
  this.setState({ todo: newTodoList });
};

handleDropDownChange = (e) => {
  const option = e.target.value;
  let newTodoList = this.state.todo.slice();
  if (option === "urgent") {
    this.setState({ origTodo: newTodoList });
    newTodoList = newTodoList.filter((item) => item.urgent === true);
    return this.setState({ todo: newTodoList });
  }
  if (option === "normal") {
    newTodoList = this.state.origTodo.slice();
    newTodoList.sort(this.sortByCompleteStatus);
    return this.setState({ todo: newTodoList });
  };

};

sortByCompleteStatus = (a, b) => a.complete === b.complete ? 0 : a.complete ? -1 : 1;

render() {
  return (
    <div>
      <div style={{ display: "flex", marginBottom: 10 }}>
        <button onClick={this.handleClearAll}>Clear all</button>
        <button onClick={() => this.handleClearFirst(1)}>Clear the first item</button>
        <button onClick={this.handleonDeleteCompleted}>Clear completed</button>
        <select name="option" onChange={this.handleDropDownChange}>
          <option value={"normal"}>Normal</option>
          <option value={"urgent"}>Urgent Only</option>
        </select>
      </div>
      <AddTodo
        onTyping={this.handleInputChange}
        inputTextValue={this.state.newItem.desc}
        onUrgentTicked={this.handleonUrgentChecked}
        onPost={this.handleOnSubmit}
        urgent={this.state.newItem.urgent}
      />
      {
        this.state.todo.map((item, index) => {
          return (
            <div>
              <Todo
                todo={item.desc}
                index={index}
                urgent={item.urgent}
                complete={item.complete}
                onComplete={this.handleOnComplete} />
              {index !== this.state.todo.length - 1 &&
                <hr />
              }
            </div>
          );
        })
      }
    </div >

  );
}
}