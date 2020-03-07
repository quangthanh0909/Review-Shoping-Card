import React, { Component } from "react";
import {Prompt} from 'react-router-dom'
import ProductContainer from "../../Redux/Container/ProductContainer";
import CartContainer from "../../Redux/Container/CartContainer";

export class Home extends Component {
  render() {
    return (
      <main>
        <ProductContainer />
        <CartContainer />
        <Prompt
          when={true}
          message={location =>(`Bạn có muốn thoát khỏi trang hiện tại và đi đến trang ${location.pathname}`)}
        />
      </main>
    );
  }
}

export default Home;
