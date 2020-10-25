import React, { Component } from 'react'
import {connect} from 'react-redux'
import RazerKeyboard from './images/RazerCynosa.jpg'
import RazerBlackWidow from './images/RazerBlackWidow.jpg'
import RazerDeathStalker from './images/RazerDeathStalker.jpg'
import RazerHuntsmanElite from './images/RazerHuntsmanElite.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'react-bootstrap'
import {MdShoppingBasket, MdAddShoppingCart, MdHome, MdFavorite, MdAdd, MdPlusOne} from 'react-icons/md'
import {store} from './store'
import {FaGithub, FaAddressBook} from 'react-icons/fa'
class keyboards extends Component {
    render() {
        const {productsInCart} = this.props
        const {productsInWishList} = this.props
        const keyboards = [
            {
                name: 'Razer Cynosa Chroma RGB',
                price: 59, 
                image: RazerKeyboard,
                id: 0
            },
            {
                name: 'Razer Black Widow X Chroma',
                price: 199, 
                image: RazerBlackWidow,
                id:1
            },
            {
                name: 'Razer Death Stalker Chroma',
                price: 149, 
                image: RazerDeathStalker,
                id:2
            },
            {
                name: 'Razer Death Stalker Chroma',
                price: 199, 
                image: RazerHuntsmanElite,
                id:3
            },]
            const addProduct=(keyboard)=>
            {
                store.dispatch({type: 'addToCart', name: keyboard.name, price: keyboard.price, image: keyboard.image, id: keyboard.id})
            }
            const addToWishList=(keyboard)=>
            {
                store.dispatch({type: 'addToWishList', name: keyboard.name, price: keyboard.price, image: keyboard.image, id: keyboard.id})
            }
        return (
            <div>
                <Navbar className ='navbar' variant='light'>
                    <NavbarBrand>Home</NavbarBrand>
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
                {keyboards.map(keyboard=>
                
                <div className='productShow'>
                <h3 className='productName'>{keyboard.name}</h3>
                <img className='productImage' src={keyboard.image}></img>
                <p className='productPrice'><strong>$ {keyboard.price}.99</strong></p>
                <Button  className='addProductButton' variant='warning' onClick={()=>addToWishList(keyboard)}> <MdAdd size={20}></MdAdd> <strong>Add to WishList </strong> </Button>

                <Button  className='addProductButton' variant='success' onClick={()=>addProduct(keyboard)}> <MdAddShoppingCart size={20}></MdAddShoppingCart> <strong>Add to cart </strong> </Button>

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
