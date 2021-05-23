import React from 'react';
import styled from 'styled-components';
import { FaMoon } from 'react-icons/fa';
import {useAppContext} from '../contexts/context';

const Container = styled.div`

background: var(--background-color-2);
font-size: 1.2rem;
color: var(--menu-color);

.crescent{
    position: absolute;
    right: 1rem;
    top: 1.8rem;
    display: none;
    background: none;
    font-size: 1.4rem;
    color: var(--menu-color);
    transform: rotate(235deg);
    cursor: pointer
}
.crescent-menu{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    display: block;
    background: none;
    font-size: 1.2rem;
    color: var(--menu-color);
    transform: rotate(235deg);
    cursor: pointer
}

@media screen and (min-width: 767px){
   .crescent{ display: block}
   .crescent-menu{ display: none}
}
`
export const Toggle =()=>{
    const {toggleTheme} = useAppContext()
    return <Container>
        <FaMoon className='crescent' onClick={toggleTheme}/>
    </Container>
}

export const ToggleMenu =()=>{
    const {toggleTheme} = useAppContext()
    return <Container>
        <FaMoon className='crescent-menu' onClick={toggleTheme} />
    </Container>
}




