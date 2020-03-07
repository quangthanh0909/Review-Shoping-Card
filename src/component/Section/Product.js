import React, { Component } from "react";
import MessageContainer from "../../Redux/Container/MessageContainer";

class Product extends Component {
  render() {
    return (
      <section>
        <div className="container-product">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center">DANH SÁCH SẢN PHẨM</h1>
            </div>
            {this.props.children}
            <MessageContainer/>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
