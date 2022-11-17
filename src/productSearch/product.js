import { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ border: "1px solid", padding: 10, margin: 10, borderRadius: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2>{this.props.item.name}</h2>
          <strong style={{ fontSize: 24, color: "orange", display: "inline" }}>$ {this.props.item.price}</strong>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <h6 style={{ border: "1px solid", borderRadius: 10, margin: 2, padding: 5, color: "InactiveCaptionText" }}>{this.props.item.category}</h6>
        </div>

        <hr />
        <p style={{ fontSize: 16 }}>{this.props.item.description}</p>

      </div >
    );
  }
}