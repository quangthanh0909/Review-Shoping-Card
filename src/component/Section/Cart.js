import React, { Component } from "react";
import { connect } from 'react-redux'

class Cart extends Component {
  onPay=(cart)=>{
    var result=null;
    if(cart.length>0){
        for(var i=0;i<cart.length;i++){
            result+=cart[i].product.price*cart[i].quatity
        }
    }
    return result;
}
  render() {
    var {cart}=this.props;
    return (
      <section>
        <div className="container-cart">
          <div className="row">
            <div className="col-lg-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng Cộng</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.children}
                  <tr>
                    <td />
                    <td scope="row">Tổng Tiền</td>
                    <td>{this.onPay(cart)}$</td>
                    <td>
                      <button className="btn btn-primary">
                        THanh toán nha bạn
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
      cart:state.CartReducer
  }
}
export default connect(mapStateToProps,null) (Cart);
