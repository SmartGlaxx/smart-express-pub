import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {PageHero, LoginButton, AuthButton} from '../components'
import {Table} from 'react-bootstrap'
import {useCartContext} from '../contexts/cartContext'
import {NumberFormat} from '../utility/helpers'
import {FaTimes, FaTrash} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import { useAuth0 } from "@auth0/auth0-react";


const Container = styled.div`
min-height: calc(100vh - 5rem);
color: var(--text-color-1);
background: var(--background-color-1);
padding-top: 4rem;
margin-bottom: 5rem;
width: 100%;
margin: 0 auto;
${'' /* background: red; */}
position: relative;

.main{
    margin: 15px auto; 
    position: relative; 
    width: 95%;
    ${'' /* background: green; */}
}
.inner-container{
    padding: 0 2rem;
    display: flex;
    ${'' /* background: blue; */}
}
.cart-header{
    font-size: 0.9rem;
    margin: 0 1rem;
    display:flex;
    justify-content: space-between
}
.cart-number{
    font-weight: 600; 
    text-align: center
}
.cart{
    width: 70%;
    margin: 0 auto;
    
}
.cart-desc{
    background: var(--background-color-4);
    padding: 1rem;
    width: 70%;
    height: auto;
    position: relative
}

.cart-item{
    background: var(--background-color-4);
    padding: 0.6rem;
    border-radius: 10px;
    margin: 0.8rem;
    display: flex;
    box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)
;
}   
.cart-details{
    background: none;
    margin: 0.5rem 0;
    font-size: 0.9rem;
}
.cart-details div{
    background: var(--background-color-4)
}
.cart-item-name{
    font-weight: 400;
    font-size: 1rem;
    background:none;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    color: var(--text-color-1);
}

.delete{
    float: right;
    font-size: 1.1rem;
    position: absolute;
    top: 0rem;
    right: 0rem;
    background: var(--background-color-4)
}
.trash-icon{
    cursor: pointer;
    color: var(--delete-color);
    background: none
}

span, strong{
    background: none
}

.image-box{
    padding: 0;
    position: relative;
    background: none;
    width: 20%
}
.cart-image{
    max-width: 7rem;
    width:100%;
    height: auto;
    position: relative
}

.itemColor{
    text-align: left;
    width: 100%;
    max-width: 7rem;
    height: auto;
    font-size: 0.7rem;
    color: var(--text-color-2);
    padding: 0.2rem 0.2rem;
    position: absolute;
    bottom: 0rem;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    z-index: 2
}
.itemColor div{
    background: none
}
.darken{
    color: black;
}
.whiten{
    color: white
}
.cart-warning{
    position: absolute;
    text-align: center;
    padding: 2rem;
    padding-top: 5rem;
    color: orange;
    text-align: center;
    top: 5rem;
    width: 100%;
    opacity: 0.9;
    border: 2px solid var(--background-color-2);
    background: var(--warning-background);
    z-index: 7;

    h4{
         background: var(--warning-background);
    }
    p{
        font-size: 0.9rem;
         background: var(--warning-background);
    }
}

.cart-purchase{
    position: absolute;
    text-align: center;
    padding: 2rem;
    padding-top: 5rem;
    color: #eee;
    text-align: center;
    top: 5rem;
    width: 100%;
    height: 50%;
    opacity: 0.9;
    border: 2px solid var(--background-color-2);
    background: var(--purchase-background);
    z-index: 7;

    h4{
         background: var(--purchase-background);
    }
    p{
        font-size: 0.9rem;
         background: var(--purchase-background);
    }
}
.close-warning{
    position: absolute;
    right: 1rem;
    top: 1rem;
    padding: 0.2rem;
    border-radius: 5px;
    background: orange;
    color:  white
}

.close-purchase{
       ${'' /* position: absolute;
    right: 1rem;
    top: 1rem; */}
    padding: 0.2rem;
    border-radius: 5px;
    background: none;
    color:  black
}

.shipping{
    background:none;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--text-color-3);
    position: absolute;
    margin-top: 0.3rem;
    background: var(--background-color-4)
}

.fa-close{
    background: orange;
}

.cart-totals{
    background: var(--background-color-4);
    padding: 0.6rem;
    font-size: 1.1rem;
    font-weight: 400;
    float: right;
    position: relative;
    min-height: 12rem;
    display: block;
    box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07)
;
width: 50%;
margin: 3rem auto;
}
.cart-totals div{
    color: var(--text-color-1);
    background: none
}
.amount{
    float:right
}
.total{
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 2rem
}
.cart-empty{
    display: block;
    width: 50%;
    margin: 3rem auto;
    text-align: center
}
.paystack-btn{
    width: 100px;
    background: var(--background-color-2);
    color: var(--text-color-2);



    cursor: pointer;
    text-transform: uppercase;
    background:  var(--button-background);
    color: var(--button-background-hover);
    border: none;
    position: absolute;
    right: 0.6rem;;
    bottom:0.6rem;;
    padding: 0.6rem 2rem;
    outline: none;
    font-size: 1rem;
    width: auto;
    height: auto;
    box-shadow:
    0 3.4px 2.7px rgba(0, 0, 0, 0.053),
    0 8.7px 6.9px rgba(0, 0, 0, 0.075),
    0 17.7px 14.2px rgba(0, 0, 0, 0.095),
    0 36.5px 29.2px rgba(0, 0, 0, 0.117),
    0 100px 80px rgba(0, 0, 0, 0.17);
    

    :hover{
        background: var(--button-background-hover);
        color:  var(--button-background);
        z-index: 2
    }
}
.login-btn{
    width: 100%
}
${'' /* .continue-shopping{
    background: red;
    position: absolute;
    bottom: 1rem;
    height: 10rem;
    left: 1rem
} */}
@media screen and (max-width: 767px){
    .cart{width: 90%; font-size: 0.8rem}
    .itemColor{padding: 0.1rem 0.3rem}
    .cart-details{font-size: 0.7rem}
    .cart-totals{font-size: 0.9rem}
    .total{font-size: 1.15rem}
}
@media screen and (max-width: 550px){
     .cart{width: 100%; font-size: 0.7rem}
     .inner-container{padding: 0rem}
     .main{width: 100%}
     .image-box{width: 30%}
     .free-shipping{font-size: 0.6rem}
     .cart-totals{font-size: 0.8rem; width: 100%}
     
}
@media screen and (max-width: 400px){
   .itemColor{bottom: 1rem} 
}
@media screen and (max-width: 340px){
   .itemColor{bottom: 3rem} 
}
`
    

const Cart =()=>{
       const { user, isAuthenticated, isLoading } = useAuth0();

    const {_id, name, amount, selectColor, price, image, setCartItemValues, cartItems, 
    stock, shipping, warning, closeWarning, deleteCartItem, setCartEmpty, purchase, closePurchase} = useCartContext()

    const setCartItem =(_id, name, amount, selectColor, price, image, shipping)=>{
        setCartItemValues(_id, name, amount, selectColor, price, image, shipping)
    }

    useEffect(() => {
    window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
         setCartItem(_id, name, amount, selectColor, price, image, shipping)
    }, [_id, name, selectColor, price, image])

    const capitalize=(string)=>{
        let initial = string.slice(0, 1).toUpperCase();
        let substr = string.slice(1);
        return initial + substr 
    }

    const cartTotal = cartItems.reduce((total, item)=>{
        const {amount, price} = item
        const totalAmount = amount * price
        return total += totalAmount
    },0)
     
     const shippingCalc = cartItems.reduce((shippingTotal, item)=>{

         const {price, shipping} = item
         if(shipping == 'false'){
            return shippingTotal += ((price * 5)/100)
          }else{
              return shippingTotal
          }
     },0)
    const totalPay = cartTotal + shippingCalc

    // Paystack setup starts
    let userEmail = ''
    if(user){
        if(user.email){
            userEmail = user.email
        }else{
            userEmail = 'user@gmail.com'
        }
    }else{
        userEmail = 'user@gmail.com'
    }  
     const config = {
       
        reference: (new Date()).getTime(),
        email: userEmail,
        amount: totalPay,
        publicKey: process.env.REACT_APP_API_KEY,
        };

        const componentProps = {
            ...config,
            text : `Pay ₦${NumberFormat(totalPay)}`,
            onSuccess: () =>setCartEmpty()
            // onClose: () =>updateCartAfterBuy(()=>window.location.redirect('/')),
        };


    // Paystack setup ends

    return <Container>
    {warning && <div className='cart-warning'>
    <button className='close-warning'><FaTimes onClick={closeWarning} className='fa-close' /></button>
    <h4>WARNING</h4> <p>Items added to cart cannot exceed items available. ({stock} items available)</p>
    </div>}
    {purchase && <div className='cart-purchase'>
        <h4>Purchase Successful</h4>
        <p>Thank you for using my demo e-commerce application.</p>
        {/* <button className='close-purchase'><FaTimes onClick={closePurchase} className='fa-close' /></button> */}
    </div>}
        <div className='main'>
            <PageHero title='Cart'/>
            <div className='inner-container'>
                <div className='cart'>
                        <div className='cart-header'>
                        <div className='cart-number'>Cart ({cartItems.length} items) </div>
                        </div>
                        {cartItems.map((item, i )=> {
                            const {_id, name, amount, selectColor, price, image, shipping} = item
                                
                            return <div key = {i}  className='cart-item'>
                               
                                <div className='image-box'>
                                    <Link to ={`shop/${_id}`} >
                                     <img className='cart-image' src ={image} alt={name}/>
                                     </Link>
                                     <div style={{ background: ` ${selectColor}`}}  
                    className={`${selectColor == 'white' ? 'itemColor darken' : selectColor == 'black' ? 'itemColor whiten' : 'itemColor' }`}>
                                   <div>Color: </div>
                                   <div>{capitalize(selectColor)}</div>
                                </div>
                                </div>
                                <div className='cart-desc'>
                                    <div className='cart-item-name'>{name}</div>
                                
                                    {/* <hr /> */}
                                    <div className='cart-details'>
                                    <div><strong>Quantity:</strong> {amount}</div>
                                    <div><strong>  Unit Price: </strong>₦{NumberFormat(price)}</div>
                                    <div>{shipping == 'true' ? <><strong>Shipping :</strong> Free </>: <><strong>Shipping : </strong> ₦{NumberFormat(price * (5/100))}</> }</div>
                                    <div><strong>  Item Total Cost: </strong>₦{ NumberFormat((amount * price) + (price * 5)/100)} </div>
                                     <div className='delete'
                                     onClick={()=>deleteCartItem(_id, selectColor)}
                                     ><FaTrash  className='trash-icon'/></div>
                                     </div>
                                     
                                </div>
                                
                                </div>
                           
                        })}
                         {cartItems.length > 0 ?  <div className='cart-totals'> 
                            <div>
                            <div>Subtotal :  <span className='amount'>₦{NumberFormat(cartTotal)}</span></div>
                            <div>Shipping :  <span className='amount'>₦{NumberFormat(shippingCalc)}</span></div>
                            <hr />
                            <div className='total'><span>Total :</span> <span className='amount'>₦{NumberFormat(cartTotal + shippingCalc)}</span></div>
                            </div>
                           {   isAuthenticated ?  <div>
                                <PaystackButton  {...componentProps} className='paystack-btn'/>        
                            </div> : 
                              <LoginButton className='login-btn'/>
                            }
                           
                        </div> : <div className='cart-empty'>
                        <h4>Your cart is empty</h4>
                        <Link to ="/shop" >
                        <AuthButton>
                            Start Shopping
                        </AuthButton>
                        </Link>
                        </div>}
                 
                </div>
            </div>

        </div>
        
    </Container>
}

export default Cart