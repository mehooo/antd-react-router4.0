import React, {Component} from 'react';

class Product extends Component {

    render(){
        return (
            <p>Product {this.props.location.pathname}</p>
        )
    }
}
export default Product;