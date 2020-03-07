import React, { Component } from "react";
import { ADDCART_DELETE, ADDCART_UPDATE } from "../../Redux/Constants/Message";

class ItemCart extends Component {
  constructor(props) {
    super(props)
  }
  onTotal = (price, quatity) => {
    return price * quatity;
  };
  getDelete=()=>{
    this.props.onDelete(this.props.item)
    this.props.onChangeMessage(ADDCART_DELETE)
  }
  getUpdate=(product,quatity)=>{
    if(quatity < 0 ) return;
    this.props.onChangeMessage(ADDCART_UPDATE)
    this.props.onUpdate(this.props.item,quatity)
  }
  render() {
    var {item}=this.props;
    return (
      <tr>
        <td scope="row">
          <h5>{item.product.name}</h5>
          <img
            src={item.product.image}
            alt={item.product.name}
            height="100px"
            width="100px"
          />
        </td>
        <td>{item.product.price}$</td>
        <td>
          <label>{item.quatity}</label>
          <span className="btn btn-primary" onClick={(e)=>this.getUpdate(item.product,item.quatity -1)}>
            <i className="fas fa-minus" />
          </span>
          <span className="btn btn-primary" onClick={(e)=>this.getUpdate(item.product,item.quatity +1)}>
            <i className="fas fa-plus" />
          </span>
        </td>
        <td>
          <label>{this.onTotal(item.product.price, item.quatity)}$</label>
        </td>
        <td>
          <button className="btn btn-danger" onClick={this.getDelete}>
            <i className="fas fa-power-off" />
          </button>
        </td>
      </tr>
    );
  }
}

export default ItemCart;
