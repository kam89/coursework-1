import { Component } from "react";
import Product from "./product";
import { products } from "./data";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = { productList: products, category: [], filterCriteria: [] };
  }

  componentDidMount() {
    this.getCategory();
  }

  getCategory = () => {
    const sortedList = products.sort((a, b) => a.category === b.category ? 0 : a.category ? 1 : -1);
    let newCategoryList = [];
    sortedList.forEach((item, index) => {
      if (newCategoryList.includes(item.category)) return;
      newCategoryList.push(item.category);
    });
    this.setState({ category: newCategoryList });
  };

  // onFilter = (e) => {
  //   if (e === this.state.category.ALL) return this.setState({ productList: products });
  //   let filterCriteria = e.toLowerCase();
  //   let newList;
  //   if (e === this.state.category.BOTTOM)
  //     newList = products.filter(item => item.category === "pants" || item.category === "skirts");
  //   else
  //     newList = products.filter(item => item.category === filterCriteria);
  //   this.setState({ productList: newList });
  // };

  onFilter = (selectedItem, e) => {
    if (this.state.filterCriteria.length < 1) {
      const newList = products.filter(item => item.category === selectedItem);
      return this.setState({ productList: newList, filterCriteria: [selectedItem] });
    }

    let newFilterCriteria = [];
    if (e.target.checked) {
      newFilterCriteria = [...this.state.filterCriteria, selectedItem];
    }
    if (!e.target.checked) {
      newFilterCriteria = this.state.filterCriteria.slice();
      const deleteIndex = newFilterCriteria.findIndex((item) => item === selectedItem);
      newFilterCriteria.splice(deleteIndex, 1);
    }
    this.setState({ filterCriteria: newFilterCriteria });

    let newList = [];

    newFilterCriteria.forEach((filter, index) => {
      const temp = products.filter(item => item.category === filter);
      newList = [...newList, ...temp];
    });
    if (newList.length === 0) return this.setState({ productList: products });
    return this.setState({ productList: newList });
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
            {this.state.category.map((item, index) => {
              return (
                <div style={{ marginLeft: 5, display: "inline" }}>
                  <input type="checkbox" key={index} onChange={(e) => this.onFilter(item, e)} /><label>{item}</label>
                </div>
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
};;