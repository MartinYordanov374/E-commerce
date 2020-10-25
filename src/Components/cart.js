import React, { Component } from 'react';
import {Button, Nav, Navbar, NavbarBrand, NavItem, NavLink, Alert} from 'react-bootstrap'
import {MdHome, MdCancel} from 'react-icons/md'
import {connect} from 'react-redux'
import {store} from './store'
import './cart.css'
import $ from 'jquery'
import uuid from 'uuid/v4'
class cart extends Component {
    render() {
        let total = 0
        const {productsInCart} = this.props;
        const clearCart=()=>
        {
            store.dispatch({type: 'clearCart'})
        }
        const removeProduct=(id)=>
        {
            store.dispatch({type:'removeProduct', id: id})
            
        }
        const hideAlert=(id)=>
        {
            $('.' + id.toString()).fadeOut()

        }
        
        return (
            <div>
                <Navbar variant='light' >
                    <NavbarBrand href='/home'>Your cart</NavbarBrand>
                    <Nav className='ml-auto'>
                        <NavItem>
                            <NavLink className='homeLink'href='/home'>
                                <MdHome size={25}></MdHome>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                {productsInCart.map((product, index)=>
                
                <div className='productsCartList'>
                    <div className='productCartShow'>
                        <h3 className='productCartName'>{product.name}</h3>
                        <img className='productCartImage'src={product.image}></img>
                        <p className='productCartPrice'><strong>PRICE: $ {product.price}.00</strong></p>
                        <Button className='removeProductButton'variant='danger'><strong onClick={()=>removeProduct(index)}>Remove product</strong></Button>
                    </div>

                </div>)}
                <Button className='clearCartButton' variant='warning' onClick={()=>clearCart()}><strong>Clear Cart</strong></Button>

            </div>
        );
    }
    
}
const mapStateToProps=(state={productsInCart: [{}]})=>
{
    return{
        productsInCart: state.productsInCart
    }
}

export default connect(mapStateToProps)(cart);