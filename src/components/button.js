import React from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import {FaMinus} from 'react-icons/fa'
import { useAuth0 } from "@auth0/auth0-react";



const Container = styled.button`
cursor: pointer;
text-transform: uppercase;
background:  var(--button-background);
color: var(--button-background-hover);
border: none;
float: right;
padding: 0.6rem 2rem;
outline: none;
font-size: 1rem;
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
`
const HeroContainer = styled.button`
cursor: pointer;
text-transform: uppercase;
background:  var(--button-background);
color: var(--button-background-hover);
border: none;
padding: 0.6rem 2rem;
outline: none;
font-size: 1rem;
box-shadow:
  0 3.4px 2.7px rgba(0, 0, 0, 0.053),
  0 8.7px 6.9px rgba(0, 0, 0, 0.075),
  0 17.7px 14.2px rgba(0, 0, 0, 0.095),
  0 36.5px 29.2px rgba(0, 0, 0, 0.117),
  0 100px 80px rgba(0, 0, 0, 0.17);
 

:hover{
    background: var(--button-background-hover);
    color:  var(--button-background);
    ${'' /* position: sticky; */}
    z-index: 2
}
`

const MiniContainer = styled.button`
cursor: pointer;
text-transform: uppercase;
background:  var(--button-background);
color: var(--text-color-2);
border: none;
float: right;
padding: 0.3rem 1rem;
outline: none;
font-size: 0.9rem;
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
@media screen and (max-width: 767px){
    position: absolute;
    right: 1rem
    
}
`
const BuyBtnContainerList = styled.button`
cursor: pointer;
text-transform: uppercase;
background:  var(--button-background);
color: var(--text-color-2);
border: none;
float: right;
padding: 0.3rem 1rem;
outline: none;
margin-top: 1.3rem;
right: 0.5rem;
font-size: 0.9rem;
text-decoration:none;
 ${'' /* box-shadow: */}
  ${'' /* 0 3.4px 2.7px rgba(0, 0, 0, 0.053),
  0 8.7px 6.9px rgba(0, 0, 0, 0.075),
  0 17.7px 14.2px rgba(0, 0, 0, 0.095),
  0 36.5px 29.2px rgba(0, 0, 0, 0.117),
  0 100px 80px rgba(0, 0, 0, 0.17); */}
 
:hover{
    text-decoration:none;
    background: var(--button-background-hover);
    color: var(--text-color-1);
    z-index: 2
}

}

`

const BuyBtnContainerGrid = styled.button`
cursor: pointer;
 text-transform: uppercase;
 background:  var(--button-background);
 color: var(--text-color-2);
 border: none;
 float: right;
 padding: 0.3rem 1rem;
 outline: none;
 font-size: 0.9rem;
 text-decoration:none;
 margin-top: -2rem;
 ${'' /* box-shadow: */}
  ${'' /* 0 3.4px 2.7px rgba(0, 0, 0, 0.053),
  0 8.7px 6.9px rgba(0, 0, 0, 0.075),
  0 17.7px 14.2px rgba(0, 0, 0, 0.095),
  ${'' /* 0 36.5px 29.2px rgba(0, 0, 0, 0.117), 
  0 100px 80px rgba(0, 0, 0, 0.17); */}
 
:hover{
    text-decoration:none;
    background: var(--button-background-hover);
    color: var(--text-color-1);
    z-index: 2
}

}
`
const AuthBtnContainer = styled.button`
cursor: pointer;
${'' /* text-transform: uppercase; */}
font-weight: 400;
background:  var(--button-background);
color: var(--button-background-hover);
color: var(--menu-color);
border: none;
width:9rem;
min-width: 7rem;
${'' /* margin: 2rem auto; */}
${'' /* position: absolute;
right: 0.6rem;
bottom:0.6rem; */}
float: right;
padding: 0.6rem 2rem;
outline: none;
font-size: 1rem;
${'' /* box-shadow:
  0 3.4px 2.7px rgba(0, 0, 0, 0.053),
  0 8.7px 6.9px rgba(0, 0, 0, 0.075),
  0 17.7px 14.2px rgba(0, 0, 0, 0.095),
  0 36.5px 29.2px rgba(0, 0, 0, 0.117),
  0 100px 80px rgba(0, 0, 0, 0.17); */}
 
:hover{
    background: var(--button-background-hover);
    color:  var(--button-background);
    z-index: 2
}
`

const AuthBtnContainer2 = styled.button`
cursor: pointer;
text-transform: uppercase;
font-weight: 400;
background:  var(--button-background);
color: var(--button-background-hover);
color: var(--menu-color);
border: none;
margin: 2rem auto;
${'' /* position: absolute;
right: 0.6rem;
bottom:0.6rem; */}
${'' /* float: right; */}
padding: 0.6rem 2rem;
outline: none;
font-size: 1rem;
${'' /* box-shadow:
  0 3.4px 2.7px rgba(0, 0, 0, 0.053),
  0 8.7px 6.9px rgba(0, 0, 0, 0.075),
  0 17.7px 14.2px rgba(0, 0, 0, 0.095),
  0 36.5px 29.2px rgba(0, 0, 0, 0.117),
  0 100px 80px rgba(0, 0, 0, 0.17); */}
 
:hover{
    background: var(--button-background-hover);
    color:  var(--button-background);
    z-index: 2
}
`
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <AuthBtnContainer onClick={() => loginWithRedirect()}>
  Log In
  </AuthBtnContainer>;
};

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <AuthBtnContainer onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </AuthBtnContainer>
  );
};




export const HeroButton =({children})=>{
    return <HeroContainer>{children}</HeroContainer>
}

export const ButtonComponent =({children})=>{
    return <Container>{children}</Container>
}

export const MiniButtonComponent =({children})=>{
    return <MiniContainer>{children}</MiniContainer>
}

export const BuyBtnComponentList =({children})=>{
    return <BuyBtnContainerList>{children}</BuyBtnContainerList>
}
export const BuyBtnComponentGrid =({children})=>{
    return <BuyBtnContainerGrid>{children}</BuyBtnContainerGrid>
}
export const AuthButton =({children})=>{
    return <AuthBtnContainer2>{children}</AuthBtnContainer2>
}



