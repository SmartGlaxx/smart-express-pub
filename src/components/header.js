import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Sidebar from './sidebar';
import Overlay from './overlay'
import {Links} from "../utility/constants";
import {useAppContext} from '../contexts/context'
import {LoginButton, LogoutButton, ShoppingCart, ShoppingCartMenu, Toggle} from './index';
import { useAuth0 } from "@auth0/auth0-react";
import {Spinner} from 'react-bootstrap'

const Container = styled.div`
${'' /* *{
    background: var( --menu-inner-background);
} */}
    background: var(--menu-inner-background);
    margin: 0;
    position: fixed;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 10;

.header-main{
    background: var(--menu-inner-background);
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
}
.link{
    background: var( --menu-inner-background);
    color: var(--menu-color);
    text-decoration:none;
    margin: var(--list-item-margin);
    font-weight: 400
}
.linkItem{
    background: var( --menu-inner-background);
    list-style-type:none;
    display:grid;
    place-items: center;
    box-sizing: border-box
}
.links{
    background: var( --menu-inner-background);
    display: none;
    @media screen and (min-width: 767px){
        display: flex;
        margin-left: auto;
        margin-top: 1rem;
        justify-content:center;
        align-items: center;
    }
}
.menu-bar{
    cursor: pointer;
    font-size: 1.3rem;
    position: fixed;
    right: 1rem;
    background:none;
    color: var(--menu-color);
    @media screen and (min-width: 767px){
        display: none
    }
}
.title{
    background: inherit;
    background: var( --menu-inner-background);
    font-family: 'Tangerine', "arial";
    font-size: 2.5rem;
    color: var(--menu-color);
    letter-spacing: 0.15rem;
    margin-left: 1rem;
    margin-right: 4rem;
}
.title-link{
    text-decoration: none
}
.username{
    background: var( --menu-inner-background);
    color: var(--menu-color);
    font-weight: 700;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}
.user-email{
    background: var( --menu-inner-background);
    color: var(--menu-color);
    font-weight: 400;
    font-size: 0.8rem;
    width: 100%;
    text-align: right;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}
.underscore{
    color:  var( --menu-inner-background);;
    background: none;
    font-size: 0.5rem
}
.active{
	text-decoration: underline ;
	color: var(--active-text-color-2);
}
@media screen and (max-width: 900px){
   
   .title{ margin-right: 0}
}
@media screen and (max-width: 767px){
    .username, .user-email{ display: none}
   .title{font-size: 2.2rem}
   ${'' /* .menu-shopping-cart{display:block} */}
}
@media screen and (max-width: 300px){
    .title{font-size: 1.6rem}
}
@media screen and (max-width: 250px){
    .title{margin-right: 6rem}
}
`

const Header =()=>{
    const { user, isAuthenticated, isLoading } = useAuth0();
    const {showMenu, showMenuBar} = useAppContext()
    
    if(isLoading){
        return <Spinner />
    }
console.log('isAuthenticated', user)
   const userAuthenticated = isAuthenticated && user
     let userName = ''
     if(userAuthenticated){
         if(user.given_name){
             userName = 'Hello ' + user.given_name
         }if(user.name){
             userName = 'Hello ' + user.name
         }else{
             userName = 'Invalid Authentication'
         }  
     }else{
         userName = ''
     } 

    let userEmail = ''
    if(userAuthenticated){
        if(user.email){
             userEmail = user.email 
         }else{
             userEmail = 'Email not available'
         }  
     }else{
         userEmail = ''
     }

    return <Container>
    <Overlay />
        <FaBars className='menu-bar' onClick ={showMenu}/>
        <Sidebar />
        <div className='header-main'>
        <Link to='/' className='title-link'>
        <h2 className='title'>Smart<span className='underscore'>_</span>Express</h2>
        </Link>
            {user && <><span className='username'>{userName}</span>
            <span className='user-email'>{userEmail}</span></>
            }
            <div className='menu-shopping-cart'>
                <ShoppingCartMenu />
            </div>
        <ul className='links'>
            {Links.map((linkDetails, i) =>{
                const {name, link} = linkDetails
                return(
                    <li className='linkItem' key={i}>
                        <NavLink exact to={link} className='link' activeClassName="active">{name}</NavLink>
                    </li>
                )
            })}
            {isAuthenticated  ? 
                <li className='linkItem'>
                    <LogoutButton />
                </li> : 
                <li className='linkItem'>
                    <LoginButton />
                </li>
            }
            <li className='linkItem'>
                <Toggle />
            </li>
            <li className='linkItem'>
                <ShoppingCart />
            </li>
        </ul>
        </div>
      
    </Container>
}

export default Header