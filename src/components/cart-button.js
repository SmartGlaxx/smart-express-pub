import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useCartContext} from '../contexts/cartContext'

const Container = styled.div`
    background: var(--menu-inner-background);
    margin: 0 5rem;
    width: auto;
.shopping-cart{
    cursor: pointer;
    font-size: 1.8rem;
    position: absolute;
    background: var(--menu-inner-background);
    right: 5.5rem;
    top: 1.7rem;
    color: var(--menu-color);

}
.shopping-cart-menu{
    cursor: pointer;
    font-size: 1.6rem;
    position: fixed;
    right: 3.7rem;
    top: 1.7rem;
    background:none;
    color: var(--menu-color);
}

.cart-count-1, .cart-count-2{
    background: red;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    color: var(--menu-color);
    z-index: 2;
}

.cart-count-1{
    position: absolute;
    right: 4.6rem;
    top: 1rem;
}
.cart-count-2{
    position: absolute;
    right: 3rem;
    top: 1rem;
}


 @media screen and (min-width: 767px){
     .cart-count-2, .shopping-cart-menu{
         display:none
     }
     .cart-count-1, .shopping-cart{
        display: flex;
    }
}

`

const ShoppingCart =()=>{
    const {cartItems} = useCartContext()
    return <Container >
        <Link to='/cart'>
        <FaShoppingCart className='shopping-cart'/>
            <span className='cart-count-1'>{cartItems.length}</span>
        </Link>
    </Container>
}

const ShoppingCartMenu =()=>{
    const {cartItems} = useCartContext()
    return <Container>
        <Link to='/cart'>
        <FaShoppingCart className='shopping-cart-menu' />
            <span className='cart-count-2'>{cartItems.length}</span>
        </Link>
    </Container>
}


export {ShoppingCart, ShoppingCartMenu}