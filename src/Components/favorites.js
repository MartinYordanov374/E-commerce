import React, { Component } from 'react';
import {connect} from 'react-redux'
import {store} from './store'
import {Button, Nav, Navbar, NavbarBrand, NavItem, NavLink, Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {MdShoppingBasket, MdMouse, MdKeyboard, MdGames, MdHome} from 'react-icons/md'
import {FaGithub, FaAddressBook} from 'react-icons/fa'
import './index.css'
import mouse from './images/mouse.jpg';
import keyboard from './images/keyboard.jpg';
import figures from './images/figures.jpg';
import './wishList.css'
class favorites extends Component {
    render() {        
        const {productsInCart} = this.props;
        const {productsInWishList} = this.props;
        const removeFromWishList=(product)=>
        {
            store.dispatch({type:'removeFromWishList', name: product.name, price: product.price, image: product.image})
        }
        const addProduct=(product)=>
        {
            store.dispatch({type: 'addToCart', name: product.name, price: product.price, image: product.image, id: product.id})
        }
        return (
            <div>
                 <Navbar className ='navbar' variant='light'>
                    <NavbarBrand>Home</NavbarBrand>
                    <Nav className='ml-auto'>
                        <NavItem>
                            <NavLink className='homeLink'href='/home'>
                                <MdHome size={25}></MdHome>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/cart'>
                                <span className='cartIndicator'><MdShoppingBasket size={25}></MdShoppingBasket>
                                <span>{productsInCart.length}</span></span>
                            </NavLink>
                        </NavItem>
                        
                    </Nav>
                </Navbar>
                <div className='wishListWrapper'>
                {productsInWishList.map(product=>
                
                <div className='showWishListProducts'>
                    <h3 className='wishListProductName'>{product.name}</h3>
                    <img className='wishListProductImage' src={product.image}></img>
                    <p className='wishListProductPrice'><strong>$ {product.price}.99</strong></p>
                <Button className='removeProductWishListButton' variant='warning' onClick={()=>removeFromWishList(product)}><strong>Remove from wishlist</strong></Button>
                <Button className='AddToCartProductWishListButton' variant='success' onClick={()=>addProduct(product)}><strong>Add to Cart</strong></Button>

            </div>)}
                </div>                    
                <div className='footer fixed'>
                    <div className='row'>
                        <div className='footer-about col-sm-4 col-lg-4 col-lg-3'>
                            <h1 className='footerInfoHeader'><span className='footerInfoHeaderLeftSide'>About</span> Me</h1>
                            <h2 className='footerInfoHolder'>I am a web developer, focused on front-end technologies, more specifically the ReactJS Framework</h2>
                        </div>
                        <div className='footer-about col-sm-4 col-lg-4 col-lg-3'>
                            <h1 className='footerInfoHeader'><span className='footerInfoHeaderLeftSide'>About</span> the project</h1>
                            <h2 className='footerInfoHolder'>This is a project I've worked on as a part of learning how to use Redux and Redux-Persist and I am very proud of it!</h2>
                        </div>
                        <div className='footer-about col-sm-4 col-lg-4 col-lg-3'>
                            <h1 className='footerInfoHeader'>
                                <span className='footerInfoHeaderLeftSide'>Check</span> the project out on <span className='footerInfoGithubLeftSide'>Git</span><span className='footerInfoGithubRightSide'>Hub</span> and other info
                            </h1>
                            <h2 className='footerInfoHolder'> <a class='gitHubLink' href='https://github.com/GoofyGalaxy374/E-commerce'><FaGithub size={25}></FaGithub> Check the code out</a></h2>
                            <h2 className='footerInfoHolder'> <a class='gitHubLink' href='https://goofygalaxy374.github.io/Portfolio/dist/index.html'><FaAddressBook size={25}></FaAddressBook> My Portfolio website</a></h2>
                        </div>
                    </div>
                </div> 
            </div>    
        );
    }
}
const mapStateToProps=(state={productsInCart: [{}], productsInWishList: [{}]})=>
{
    return{
        productsInCart: state.productsInCart,
        productsInWishList: state.productsInWishList
    }
}


export default connect(mapStateToProps)(favorites);