import React, { Component } from 'react'
import {connect} from 'react-redux'
import FunkoPopDeadPool from './images/FunkoPopDeadpool.jpg'
import FunkoPopRey from './images/FunkoPopRey.jpg'
import FunkoPopElrond from './images/FunkoPopElrond.jpg'
import FunkoPopEddardStark from './images/FunkoPopEddardStark.jpg'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'react-bootstrap'
import {MdShoppingBasket, MdAddShoppingCart, MdHome, MdFavorite, MdAdd, MdPlusOne} from 'react-icons/md'
import {store} from './store'
import {FaGithub, FaAddressBook} from 'react-icons/fa'
class keyboards extends Component {
    render() {
        const {productsInCart} = this.props
        const {productsInWishList} = this.props
        const figures = [
            {
                name: 'FunkoPop-Deadpool',
                price: 29, 
                image: FunkoPopDeadPool,
                id: 0
            },
            {
                name: 'FunkoPop-Star Wars-Rey',
                price: 29, 
                image: FunkoPopRey,
                id:1
            },
            {
                name: 'FunkoPop-Lord of the rings-Elrond',
                price: 29, 
                image: FunkoPopElrond,
                id:2
            },
            {
                name: 'FunkoPop-Game of Thrones-Eddard Stark',
                price: 29, 
                image: FunkoPopEddardStark,
                id:3
            },]
            const addProduct=(figure)=>
            {
                store.dispatch({type: 'addToCart', name: figure.name, price: figure.price, image: figure.image, id: figure.id})
            }
            const addToWishList=(figure)=>
            {
                store.dispatch({type: 'addToWishList', name: figure.name, price: figure.price, image: figure.image, id: figure.id})
            }
        return (
            <div>
                <Navbar className ='navbar' variant='light'>
                    <NavbarBrand href='/home'>Home</NavbarBrand>
                    <Nav className='ml-auto'>
                        <NavItem>
                            <NavLink href='/home'>
                                <MdHome size={25}></MdHome>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/wishList'>
                                <span className='wishListLink'><MdFavorite size={25}></MdFavorite></span>
                                <span>{productsInWishList.length}</span>
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
                {figures.map(figure=>
                
                <div className='productShow'>
                <h3 className='productName'>{figure.name}</h3>
                <img className='productImage' src={figure.image}></img>
                <p className='productPrice'><strong>$ {figure.price}.99</strong></p>
                <Button  className='addProductButton' variant='warning' onClick={()=>addToWishList(figure)}> <MdAdd size={20}></MdAdd> <strong>Add to WishList </strong> </Button>

                <Button  className='addProductButton' variant='success' onClick={()=>addProduct(figure)}> <MdAddShoppingCart size={20}></MdAddShoppingCart> <strong>Add to cart </strong> </Button>

            </div>)}
            <div className='footer'>
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
        )
    }
}
const mapStateToProps=(state={productsInCart: [{}], productsInWishList: [{}]})=>
{
    return{
        productsInCart: state.productsInCart,
        productsInWishList: state.productsInWishList
    }
}
export default connect(mapStateToProps)(keyboards)
