import React, {PureComponent} from 'react';
import {Link, Outlet, Route, Routes} from "react-router-dom";
import Product from "./product";

class Products extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          title: '商品列表1'
        },
        {
          id: 2,
          title: '商品列表2'
        },
        {
          id: 3,
          title: '商品列表3'
        },
        {
          id: 4,
          title: '商品列表4'
        }
      ]
    }
  }
  render() {
    const {products} = this.state
    return (
      <div>
        <ul>
          {
            products.map(item => (
              <li key={item.id}>
                <Link to={`${item.id}?name=justin&age=18`} state={products}>{item.title}</Link>
              </li>
            ))
          }
        </ul>
        <Outlet/>
        {/*<Routes>*/}
        {/*  <Route path=":id" element={<Product/>}/>*/}
        {/*  <Route index element={<p>默认路径</p>}/>*/}
        {/*</Routes>*/}
      </div>
    );
  }

  toDetail(item) {

  }
}

export default Products;