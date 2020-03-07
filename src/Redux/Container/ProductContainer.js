import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../Action/Action'
import Product from '../../component/Section/Product';
import ItemProduct from '../../component/Section/ItemProduct';

class ProductContainer extends Component {
    onShowProduct=(product)=>{
        var {onAddCart,onChangeMessage}=this.props;
        var result=-1;
        if(product.length>0){
            result=product.map((item,index)=>{
                return(
                    <ItemProduct
                        key={index}
                        item={item}
                        onAddCart={onAddCart}
                        onChangeMessage={onChangeMessage}
                    />
                )
            })
        }
        return result
    }
    render() {
        var {product}=this.props;
        return (
            <Product>
                {this.onShowProduct(product)}
            </Product>
        )
    }
}
ProductContainer.propTypes={
    product:PropTypes.arrayOf(
        PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired,
        status:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        invetory:PropTypes.number.isRequired
        })
    ).isRequired,
}
const mapStateToProps=(state)=>{
    return{
        product:state.ProductReducer
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onAddCart:(product)=>{
            dispatch(actions.addCart(product,1))
        },
        onChangeMessage:(message)=>{
            dispatch(actions.changeMessage(message))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer)
