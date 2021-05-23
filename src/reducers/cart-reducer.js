import React from 'react'

const SET_STOCK = 'SET_STOCK'
const SET_AMOUNT = 'SET_AMOUNT'
const SET_SELECTED_COLOR = 'SET_SELECTED_COLOR'
const SET_PRICE = 'SET_PRICE'
const SET_SELECTED_IMAGE = 'SET_SELECTED_IMAGE'
const SET_PRODUCT_NAME = 'SET_PRODUCT_NAME'
const SET_NEW_CART_VALUES = 'SET_NEW_CART_VALUES'
const CLEAR_NEW_CART_VALUES = 'CLEAR_NEW_CART_VALUES'
const SET_CART_ITEMS = 'SET_CART_ITEMS'
const SET_ITEM_PROPERTIES = 'SET_ITEM_PROPERTIES'
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'
const CART_WARNING = 'CART_WARNING'
const UPDATE_CART_ITEMS = 'UPDATE_CART_ITEMS'
const SET_CART_EMPTY = 'SET_CART_EMPTY'
const RESTORE_PURCHASE_DEFAULT = 'RESTORE_PURCHASE_DEFAULT'
const CLOSE_PURCHASE = 'CLOSE_PURCHASE'

const reducer = (state, action)=>{
    switch(action.type){
        case SET_ITEM_PROPERTIES:
        const {_id, itemName, img, price, itemcolor, stock, shipping} = action.payload
        return {...state,  _id: _id, name: itemName, image: img, price: price, selectColor: itemcolor, stock: stock, shipping: shipping }
        break;
        case SET_AMOUNT:
        return {...state, amount: action.payload}
        break;
        case SET_SELECTED_COLOR:
        return {...state, selectColor: action.payload}
        break;
        case SET_NEW_CART_VALUES:
        return {...state, new_cart_values: action.payload,   amount : 1}
        break;
        case CLEAR_NEW_CART_VALUES:
        return {...state, new_cart_values: {}}
        break;
        case SET_CART_ITEMS:
        return {...state, cartItems: [...state.cartItems, action.payload]}
        break;
        case UPDATE_CART_ITEMS:
        return {...state, cartItems: action.payload}
        break;        
        case CART_WARNING:
        return {...state, warning: action.payload}
        break;
        case SET_CART_EMPTY:
        return {...state, cartItems: [], purchase: true}
        break;
        case RESTORE_PURCHASE_DEFAULT:
        return {...state, purchase: false}
        break
        case CLOSE_PURCHASE:
        return {...state, purchase: false}
        break

    }
    return state
}

export default reducer