import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useAppContext} from '../contexts/context';
import {HeroButton} from './index';
import Carousel from 'react-bootstrap/Carousel';
import card1 from "../assets/hero-cards/card1.jpg";
import card2 from "../assets/hero-cards/card2.jpg";
import card3 from "../assets/hero-cards/card3.jpg";
import card4 from "../assets/hero-cards/card4.jpg";
import card5 from "../assets/hero-cards/card5.jpg";

const Container = styled.div`
${'' /* background: var(--overlay-background); */}
height: 90vh;
max-width: 100%;
overflow:hidden;
.images{
    overflow:hidden;
    box-sizing: border-box;
    max-width: 100%;
    display: grid;
    place-items:center
}
.hero-img{
    width: 13rem;
    box-shadow:
  0 1.6px 1.2px rgba(0, 0, 0, 0.015),
  0 3.4px 2.7px rgba(0, 0, 0, 0.022),
  0 5.8px 4.6px rgba(0, 0, 0, 0.027),
  0 8.7px 6.9px rgba(0, 0, 0, 0.031),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 17.7px 14.2px rgba(0, 0, 0, 0.039),
  0 25.1px 20.1px rgba(0, 0, 0, 0.043),
  0 36.5px 29.2px rgba(0, 0, 0, 0.048),
  0 56.3px 45px rgba(0, 0, 0, 0.055),
  0 100px 80px rgba(0, 0, 0, 0.07)
;

}

.img-one{
    position: absolute;
    animation: anim1 2s; 
    transform: translateY(5rem)
}
@keyframes anim1 {
    0%{transform:translateY(-15rem)}
    100%{transform:translateY(5rem)}
}
.img-two{
    position: absolute;
    animation: anim2 2.5s; 
    transform: translate(7rem, 3rem)
}
@keyframes anim2 {
    0%{transform:translateY(-15rem)}
    80%{transform:translateY(5rem)}
    100%{transform:translate(7rem, 3rem)}
}
.img-three{
    position: absolute;
    animation: anim3 3s; 
    transform: translate(-7rem, 1rem)
}
@keyframes anim3 {
    0%{transform:translateY(-15rem)}
    70%{transform:translateY(5rem)}
    100%{transform:translate(-7rem, 1rem)}
}
.img-four{
    position: absolute;
    animation: anim4 3.5s; 
    transform: translate(13rem, 7rem)
}
@keyframes anim4 {
    0%{transform:translateY(-15rem)}
    60%{transform:translateY(5rem)}
    100%{transform:translate(13rem, 7rem)}
}
.img-five{
    position: absolute;
    animation: anim5 4s; 
    transform: translate(-13rem, 7rem);
}
@keyframes anim5 {
    0%{transform:translateY(-15rem)}
    60%{transform:translateY(5rem)}
    100%{transform:translate(-13rem, 7rem)}
}
.tagline{
    color: var(--text-color-1);
    text-align: right;
    font-size: 3rem;
    font-weight: 600;
    padding: 10rem
}
.mobile-tagline{
    display:none;
}


@media screen and (max-width: 767px){
    .tagline{
        display:none;
    }
    .mobile-tagline{
        background:inherit;
        color: var(--text-color-1);
        display: block;
        font-size: 2rem;
        font-weight: 600;
        text-align: right;
        padding-top: 2rem;
        position:relative;
        padding-right: 2rem;
        z-index:1;
    }
    .mobile-tagline div{
        background:none;
    }
    .hero-img{
        width: 10rem
    }
    .images{
        height: 75vh;
        margin-top: -5rem;
        padding-bottom: 2rem;
        
    }
}

`

const Hero =()=>{
    return (<Container > 
    <div className='mobile-tagline'>
        <div className='tagline-top'>Your Shopping,</div>
        <div className='tagline-bottom'>Our Business</div>
        <Link to='/shop'>
       <HeroButton>get started </HeroButton>
       </Link>
    </div>
    <div className='row'>
    <div className='images col-sm-12 col-md-6'>
        <img src ={card5} alt='hero-img5' className='hero-img img-five' />     
        <img src ={card4} alt='hero-img4' className='hero-img img-four' />     
        <img src ={card3} alt='hero-img3' className='hero-img img-three' /> 
        <img src ={card2} alt='hero-img2' className='hero-img img-two' />      
        <img src ={card1} alt='hero-img1' className='hero-img img-one' />        
    </div>
    <div className='tagline col-sm-12 col-md-6'>
        <div className='tagline-top'>Your Shopping,</div>
        <div className='tagline-bottom'>Our Business</div>    
       <Link to='/shop'>
       <HeroButton >get started </HeroButton>
       </Link>
    </div>
    </div>
    </Container>)
}

export default Hero