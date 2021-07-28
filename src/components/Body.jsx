import React, { Component } from 'react';
import ProductContainer from '../containers/ProductContainer';
import Message from './message';
import Cart from './Cart';
class Body extends Component {
    state = {  }
    render() { 
        return ( 
            <main id="mainContainer">
            <div className="container">
                <ProductContainer></ProductContainer>
                
                
               
                
            </div>
        </main>
         );
    }
}
 
export default Body;