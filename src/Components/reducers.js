import React from 'react'
import $ from 'jquery'
import uuid from 'uuid/v4'
const reducer = (state={productsInCart:[{}], productsInWishList: [{}]}, action)=>
{
    switch(action.type)
    {
        case 'addToCart':
            return{
                
                ...state,
                productsInCart: [...state.productsInCart, {name: action.name, price: action.price, image: action.image, id: action.id }]            
            }
        case 'addToWishList':
            return{
                ...state,
                productsInWishList: [...state.productsInWishList, {name: action.name, price: action.price, image: action.image, id: action.id }]            

            }
        case 'removeFromWishList':
            let updatedWishList = [...state.productsInWishList]
            let wishListIndex = updatedWishList.indexOf(product=>product.id===action.id)
            if(wishListIndex<=-1 || wishListIndex<=0)
            {
                updatedWishList.splice(wishListIndex,1)
            }
            return{
                ...state,
                productsInWishList: updatedWishList
            }

        case 'clearCart':
            return{
                ...state,
                productsInCart: []   
            }

        case 'removeProduct':
            let updatedCart = [...state.productsInCart]
            let index = updatedCart.indexOf(product=>product.id===action.id)
            if(index>=0 || index>=-1)
            {
                updatedCart.splice(index,1)
            }
            return{
                ...state,
                productsInCart: updatedCart
            }
        default:
            return state
    }
}
export default reducer;