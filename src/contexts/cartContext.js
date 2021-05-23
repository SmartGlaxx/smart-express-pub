import React, {useEffect, useContext} from 'react'
import reducer from '../reducers/cart-reducer'

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
const CART_WARNING = 'CART_WARNING'
const UPDATE_CART_ITEMS = 'UPDATE_CART_ITEMS'
const SET_CART_EMPTY = 'SET_CART_EMPTY'
const RESTORE_PURCHASE_DEFAULT = 'RESTORE_PURCHASE_DEFAULT'
const CLOSE_PURCHASE = 'CLOSE_PURCHASE'

const CartContext = React.createContext()

const getLocalStorage = ()=>{
    if(localStorage.getItem('smart-express-cart')){
       const cartValues = localStorage.getItem('smart-express-cart')
        return JSON.parse(cartValues)
    }else{
        return []
    }
}

const initialState ={
    _id: '',
    name: '',
    stock: 0,
    price: 0,
    selectColor : '',
    image: '',
    amount : 1,
    new_cart_values:{},
    cartItems: getLocalStorage(),
    warning: false,
    purchase: false
}

export const CartProvider = ({children})=>{
    const [state, dispatch] = React.useReducer(reducer, initialState)

// console.log(state.new_cart_values)

const setSelectColor =(value)=>{
    dispatch({type: SET_SELECTED_COLOR, payload: value})
}

     const setAmount=(itemAmount, func)=>{
         if(func == 'add'){
             if(itemAmount == state.stock){
                 dispatch({type: SET_AMOUNT, payload: itemAmount})
             }else{
                  itemAmount += 1
                  dispatch({type: SET_AMOUNT, payload: itemAmount})
             }        
         }
         if(func == 'minus'){
              if(itemAmount == 1){
                 dispatch({type: SET_AMOUNT, payload: itemAmount})
             }else{
                  itemAmount -= 1
                  dispatch({type: SET_AMOUNT, payload: itemAmount})
             } 
         }
     }
     

    const setItemProperties =(_id, itemName, img, price, itemcolor, stock, shipping)=>{
     
         dispatch({type: SET_ITEM_PROPERTIES, payload: {_id, itemName, img, price, itemcolor, stock, shipping}})
    }
    const setCartItemValues =(_id, name, amount, selectColor, price, image, shipping)=>{
    dispatch({type: SET_NEW_CART_VALUES, payload: {_id, name, amount, selectColor, price, image, shipping}})
        setTimeout(() => {
            dispatch({type: CLEAR_NEW_CART_VALUES})
        }, 100);
    }
    
    const closeWarning = ()=>{
        dispatch({type: CART_WARNING, payload: false})
    }


    const setCartItems = ()=>{
        if(state.new_cart_values.name){
            if(!state.cartItems.length){
                dispatch({type: SET_CART_ITEMS, payload: state.new_cart_values})
            }else{
    
                const item_check = state.cartItems.filter(item =>{
                    return item._id == state.new_cart_values._id
                })
                const foundItem = item_check.find(item =>{
                    return item.selectColor == state.new_cart_values.selectColor
 
                })
                
                if(foundItem){
                    
                    let {amount} = foundItem
                    
                    amount += state.new_cart_values.amount 
                    if(amount <= state.stock){
                    const updatedItem = {...foundItem, amount: amount}
                    const indexCheck = state.cartItems.findIndex(indexedItem => {
                        return indexedItem._id == state.new_cart_values._id && indexedItem.selectColor == state.new_cart_values.selectColor
                    })
                   state.cartItems.splice(indexCheck, 1, updatedItem)
                   }else{
                       dispatch({type: CART_WARNING, payload: true})
                       setTimeout(() => {
                           dispatch({type: CART_WARNING, payload: false})
                       }, 10000);
                   }
                 
                }else{
                    if(state.new_cart_values.name){
                     dispatch({type: SET_CART_ITEMS, payload: state.new_cart_values})
                    }
                }
                
            }
           
        }else{
            // console.log('no values')
        }
        
    }

    const deleteCartItem = (id, color)=>{
        const retainedCartItems = state.cartItems.filter(item=> {
            if(item._id !== id){
                return item
            }else{
                if(item.selectColor !== color){
                    return item
                }else{
                    // console.log(item) 
                }
            }
        })
        dispatch({type: UPDATE_CART_ITEMS, payload: retainedCartItems})

    }

    const setCartEmpty =()=>{
        dispatch({type: SET_CART_EMPTY})
    }
    useEffect(()=>{
        if(state.purchase == true){
            setTimeout(()=>{
                dispatch({type: RESTORE_PURCHASE_DEFAULT})
            }, 8000)
        }
    },[state.purchase])

    const closePurchase = ()=>{
        dispatch({type: CLOSE_PURCHASE})
    }
    
    useEffect(()=>{
        localStorage.setItem('smart-express-cart',JSON.stringify(state.cartItems))
    },[state.cartItems])

    useEffect(() => {
        setCartItems()
    }, [state.new_cart_values])

    return <CartContext.Provider value={{
    ...state, setAmount, setSelectColor, setItemProperties, setCartItemValues, 
    closeWarning, deleteCartItem, setCartEmpty, closePurchase}}>
    {children}
    </CartContext.Provider>

}

export const useCartContext =()=>{
    return useContext(CartContext)
}