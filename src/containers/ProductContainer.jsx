import React, { Component } from 'react';
import Product from './../components/Product';
import { connect } from 'react-redux';
import Products from '../components/Products';
import PropTypes from 'prop-types';
class ProductContainer extends Component {
    state = {  }
    render() { 
        var {products} = this.props;
        var gen = products.map((product,index) =>{
            return <Product key={index} id = {product.id} name = {product.name} description = {product.description} image = {product.image} images={product.images} price = {product.price} inventory={product.inventory}/>;
        })

        return ( 
            <Products>
                {gen}
            </Products>
         );
    }
}

ProductContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
        })
    ).isRequired,
}
 
const mapStateToProps = state =>{
    return{
        products : state.products,

    

    }
}



const mapDispatchToProps = (dispatch,props)=>{
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);