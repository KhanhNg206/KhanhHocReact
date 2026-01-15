import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/products';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      products : [
        {id : 1 , name : "Iphone"},
        {id : 2 , name : "Apple"}
      ]
    }
  }


AddProduct = () => {
  const newProduct = {
    id : Date.now(),
    name : "sản phẩm mới"
  };
  this.setState({products : [...this.state.products, newProduct]});
};

render() {
  return(
    <div>
      <h2>Quản lý sản phẩm</h2>
      <ProductList products = {this.state.products}  />
      <button onClick = {this.AddProduct}>Thêm sản phẩm</button>
    </div>
  );
} 
}
export default App
