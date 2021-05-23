import React, {useState, useEffect} from 'react';
import {NavLink, Link} from 'react-router-dom';
import styled from 'styled-components';
import {Links} from "../utility/constants";
import {useAppContext} from '../contexts/context'
import {useUserContext} from '../contexts/userContext'
import { FaTimes, FaShoppingCart, FaLock, FaUserLock } from 'react-icons/fa';
import { ToggleMenu, LoginButton, LogoutButton } from './index';
import { useAuth0 } from "@auth0/auth0-react";


const Container = styled.div`
z-index: 12;
font-size: 0.9rem;
font-weight: 500;
*{
    background: inherit;
}
.header-menu{
    background: none;
    background: var(--menu-background);
}
.menu-title{
    font-family: 'Tangerine', "arial";
    font-size: 1.8rem;
    color: var(--menu-color);
    letter-spacing: 0.15rem;
    padding-top: 0.8rem;
    margin-left: 5%;
    background: var(--menu-background);
}
.menu-title-link{
    text-decoration: none;
    background: var(--menu-background);
}
h4{
    text-align:center;
    color: var(--h4-color);
    ${'' /* padding-top: 0.5rem */}
}
.close-btn{
    right:0.4rem;
    top: 1rem;
    font-size: 1.8rem;
    position: absolute;
    background: transparent;
    color: #f44
}
.close-btn{
    color: b44
}
.main{
    height: 80%;
    width: 90%;
    margin: 8% 5%;
    padding: 1rem 0;
    background: var(--menu-inner-background);
    @media screen and (orientation: landscape){
        overflow: scroll;
    }
}
.sidebar-link{
    color: var(--menu-color);
    text-decoration:none;
    background: var(--menu-inner-background);
    
    
}

.sidebar-linkItem{
    ${'' /* margin: var(--menu-list-item-margin);
    list-style-type:none; */}
    background: var(--menu-inner-background);
}
.menu-login-btn{
    padding: 0.3rem 1rem;
    border: none;
    outline: none;
    transition: all 2s
}
.menu-login-btn:active{
    outline: none;
    text-decoration: underline 
}
.icon{
    color: var(--icon-color);
    margin: 0 0.5rem 
}
hr{
    background: var(--menu-color);
    background: green
}

.user{
    background: none;
    color: var(--menu-color);
    font-weight: 700;
    width: auto;
    margin-top : 1rem;
    margin-left: 5%;
    text-align: left;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}

.email{
    background: none;
    color: var(--menu-color);
    margin-top: 0.2rem;
    margin-left: 5%;
    font-weight: 400;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
}
.active{
	text-decoration: underline ;
	color: var(--active-text-color-2);
}
`

const Sidebar =()=>{
    // const {user, isAuthenticated, isLoading} = useUserContext()
    const { user, isAuthenticated, isLoading } = useAuth0();
    const {showMenuBar, hideMenu} = useAppContext()
    const [sidebarUser, setSideBarUser] = useState({})

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

    useEffect(() => {
        setSideBarUser(user)
    }, [])

    return (<Container className = {`${showMenuBar ? "show-menu menu" : "menu"}`}>
    <div className='header-menu'>
     <Link to='/' className='menu-title-link' onClick={hideMenu}>
        <h2 className='menu-title'>Smart Express</h2>
    </Link>
    </div>
    
    <ToggleMenu />
        <div className='user'>{userName}</div>
        
        <div className='email'>{userEmail}</div>
    
        <div className='main'>
            <div className='sidebar-links' >
            {Links.map((linkDetails,i )=>{
                const {name, link, icon} = linkDetails
                return (
                    <NavLink to={link} className='sidebar-link' exact activeClassName="active">
                    <div className='sidebar-linkItem' key={i} onClick={hideMenu}>
                        <span className='icon'>{icon}</span> {name}
                        <hr/>
                    </div>
                    </NavLink>
                )
            })}
            {
            isAuthenticated ? 
            <LogoutButton />
             :
             <LoginButton />
            }
           
            {/* <Link to='/login' className='sidebar-linkItem'> */}
            {/* <span className='icon'><FaLock/></span>Login
            </Link> */}
            </div>
        </div>
    </Container>)
}

export default Sidebar
