import { Component } from "react";
import Product from "./product";
import { products, category } from "./data";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = { productList: products };
  }

  onFilter = (e) => {
    if (e === category.ALL) return this.setState({ productList: products });
    let filterCriteria = e.toLowerCase();
    let newList;
    if (e === category.BOTTOM)
      newList = products.filter(item => item.category === "pants" || item.category === "skirts");
    else
      newList = products.filter(item => item.category === filterCriteria);
    this.setState({ productList: newList });
  };

  onSearch = (e) => {
    let newList = products.filter(item => item.name.toLowerCase().match(e.target.value) || item.description.toLowerCase().match(e.target.value));
    this.setState({ productList: newList });
  };

  render() {
    return (
      <div>
        <div>
          <div style={{ display: "inline", justifyContent: "space-around" }}>
            {Object.values(category).map((item, index) => {
              return (
                <button key={index} style={{ marginLeft: 5, display: "inline" }} onClick={() => this.onFilter(item)}>{item}</button>
              );
            })}
            <input style={{ alignSelf: "flex-end", marginLeft: 100 }} onChange={this.onSearch}></input>
          </div>
        </div>

        <div style={{ marginTop: 25 }}>
          {
            this.state.productList.map((item, index) => <Product item={item} key={index} />)
          }
        </div>
      </div>
    );
  }
}