import React from 'react';
import styled from 'styled-components'
import {ButtonComponent} from './index';
import { FaTruck } from 'react-icons/fa';

const Container = styled.div`
background: var(--background-color-2);
box-sizing: border-box;
height: auto;
padding: 1rem;
width: auto;
overflow: hidden;
margin-right: 0px;
overflow: hidden;

.cta-title{
    background: none;
    color: var(--text-color-2);
    font-size: 2rem;
    font-weight: 900;
    line-height: 2.2rem;
    ${'' /* font-family:'Verdana' */}
}
.cta-subtitle{
    background: none;
    color: var(--text-color-2);
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
}
${'' /* .button{
    background: var(--button-background);
     color: var(--menu-color);
    float: right;
    border: none
}
.button:hover{
    background: var(--button-background-hover);
    color:  var(--button-background);
    position: sticky;
    z-index: 2
} */}
.inner-container{
    background: var(--button-background);
    border: 10px solid  var(--button-background-hover); 
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-radius: 50% 0% 0% 50%;
    padding: 5rem 3rem;
    position: relative
}

.overlay{
    position: absolute;
    top: 20%;
    width: 80%;
    height: 50%;
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    animation: animate 8s linear infinite;
    background: linear-gradient(to right, rgba(250, 250, 250, 0.1), var(--button-background), rgba(200, 200, 200, 0.3) );
    opacity: 0.1;
    ${'' /* background: red; */}
    z-index: 0
}
${'' /* .truck{
    font-size: 6rem;
    background: inherit;
    color: var(--text-color-2)
} */}

.button{
    float: right
 }
@keyframes animate {
    0%{transform: translateX(-200%); width: 10px}
    100%{transform: translateX(100%); width: 6000px}
    ${'' /* 100%{transform: translateX(300%)} */}
}
@media screen and (max-width:767px){
    Button{margin-top: 2rem}
    .truck{width: 60%; height: 22%}
}
@media screen and (max-width:500px){
    .truck{width: 50%; height: 18%}
}
` 

const Cta =()=>{
    
    return <Container>
    <div className='inner-container'>
        <div className='overlay'>
            {/* <FaTruck className='truck overlay'/> */}
        </div>
        <div className='cta-title'>
            Delivery to your doorstep,
        </div>
        <div className='cta-subtitle'>
            Anywhere, Anytime
        </div>
        <div>
            <ButtonComponent>Shop Now</ButtonComponent>
        </div>
    </div>
    </Container>
}

export default Cta