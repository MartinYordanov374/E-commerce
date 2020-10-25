import React, { Component } from 'react';
import {connect} from 'react-redux'
import {store} from './store'
import {Button, Nav, Navbar, NavbarBrand, NavItem, NavLink, Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {MdShoppingBasket, MdMouse, MdKeyboard, MdGames, MdFavorite} from 'react-icons/md'
import {FaGithub, FaAddressBook} from 'react-icons/fa'
import './index.css'
import mouse from './images/mouse.jpg';
import keyboard from './images/keyboard.jpg';
import figures from './images/figures.jpg';
class index extends Component {
    render() {        
        const {productsInCart} = this.props;
        const {productsInWishList} = this.props;
        return (
            <div>
                <Navbar className ='navbar' variant='light'>
                    <NavbarBrand>Home</NavbarBrand>
                    <Nav className='ml-auto'>
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
                <div className='carouselWrapper'>
                    <Carousel>
                        <Carousel.Item >
                            <img src={mouse} className='carouselImage'></img>
                            <Carousel.Caption>
                                <h3>Gaming Mouses</h3>
                                <p><strong>Get the best gaming mouses on the market!</strong></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={keyboard} className='carouselImage'></img>
                            <Carousel.Caption>
                                <h3>Gaming keyboards</h3>
                                <p><strong>Find the keyboard that suits your gaming style the most!</strong></p>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={figures} className='carouselImage'></img>
                            <Carousel.Caption>
                                <h3>Video Game Accessories</h3>
                                <p><strong>Decorate your environment with the best gaming accessories!</strong></p>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <div className='navigatorHolder'>
                        <div className='goToMouses'>
                            <h1>Mouses</h1>
                            <img className='goToMousesBanner' src={mouse}></img>
                            <Button href='/mouses' variant='success'><MdMouse size={25}></MdMouse><strong> Go to the Gaming Mouses Page</strong></Button>
                        </div>
                        <div className='goToKeyboards'>
                            <h1>Keyboards</h1>
                            <img className='goToKeyboardsBanner'src={keyboard}></img>
                            <Button href='/keyboards' variant='success'><MdKeyboard size={25}></MdKeyboard><strong> Go to the Keyboards Page</strong></Button>
                        </div>
                        <div className='goToFigures'>
                            <h1>Figures</h1>
                            <img className='goToFiguresBanner'src={figures}></img>
                            <Button href='/figures' variant='success'><MdGames size={25}></MdGames><strong> Go to the Accessories Page</strong></Button>

                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps)(index);