import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../../component/Section/Cart";
import * as actions from "../Action/Action";
import ItemCart from "../../component/Section/ItemCart";
import PropTypes from "prop-types";

class CartContainer extends Component {
  render() {
    const { onDelete, onChangeMessage, onUpdate ,cart} = this.props;
    return    <div>
      {cart.length>0?
        cart.map((item, index) => 
             <ItemCart
               key={index}
               item={item}
               onDelete={onDelete}
               onChangeMessage={onChangeMessage}
               onUpdate={onUpdate}
             />
           ):null
       }
       <Cart/>
       
    </div> 
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number.isRequired,
      invetory: PropTypes.number.isRequired
    }).isRequired
  )
};
const mapStateToProps = state => {
  return {
    cart: state.CartReducer
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete: product => {
      dispatch(actions.deleteItem(product));
    },
    onChangeMessage: message => {
      dispatch(actions.changeMessage(message));
    },
    onUpdate: (product, quatity) => {
      dispatch(actions.updateItem(product,quatity));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
