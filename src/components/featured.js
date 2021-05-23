import React from 'react';
import styled from 'styled-components'
import {useProductContext} from '../contexts/productContext'
import {Spinner} from 'react-bootstrap'
import {NumberFormat} from '../utility/helpers'
import {ButtonComponent} from './index'
import {Link} from 'react-router-dom'

const Container = styled.div`
font-size: 0.9rem;
height: auto;
width: auto;
overflow: hidden;
margin-right: 0px;
overflow: hidden;

.h4{
    color:var(--text-color-1);
    text-align: center;
    margin: 3rem 0
}
h5{
    text-align: left;
    word-wrap: break-word; 
    break-word: break-all;
    background: var(--text-color-1);
    background: none;
    color: var(--background-color-2);
    color: white;
}
.featured-boxes{
    ${'' /* padding: 1rem; */}
    ${'' /* display:grid;
    place-items: center; */}
    ${'' /* background: red; */}
    margin: 0;
    position: relative;
    overflow: hidden;
}
.featured-images{
    ${'' /* width: 150%; */}
    ${'' /* background:red; */}
    height: auto;
    width: 110%;
    z-index: 0;
    transform: scale(1.1);
    transition: all 1s;
}
.featured-boxes:hover .featured-images{
    transform: scale(1.2)
}
.popup{
    background: var(--text-color-1);
    background: none;
    color: var(--background-color-2);
    color: white;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    bottom: 1rem;
    min-height: 7rem;
    max-height: 10rem;
    transform: translateY(20rem);
    transition: all 1s;
    overflow: hidden;
    padding: 0.5rem;
    padding-left: 2rem;
    z-index: 1;
}
.featured-boxes:hover .popup{
    transform: translateY(1rem);
    transition: all 1s;
}
.overlay{
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.7s;
    background: rgba(20, 20, 20, 0.5)
}
.featured-boxes:hover .overlay{
    opacity: 1
}
.loading-spinner{
    width: 100%;
    display: grid;
    place-items: center
}
p{
    background: none;
    color: var(--price-color);
    font-weight: 700;
    font-size: 1.1rem;
}
.buy-button{
    float: right;
    color: var(--text-color-1);
    border-radius: 4px;
    border: none;
    padding: 0.3rem 1.2rem;
    font-weight: 500;
    background: var(--buy-btn-background-1);
    transition: all 0.5s
}
.buy-button:hover{
    background: var(--buy-btn-background-2);
    box-shadow: 0px 2px 1px #000
}
.buy-button:active{
    box-shadow: 0px 0px 0px 
}
.featured-header{
    color: var( --text-color-1);
    font-size: 2rem;
    text-align: center;
    font-weight: 900;
    margin: 3rem 0;
}
@media screen and (min-width : 767px){
    margin-right: 1px;
   .featured-boxes{margin: 0} 
   .featured-images{width: auto; transform: scale(1.1)}
   .buy-button{ padding: 0.3rem 1.6rem; font-size: 1.2rem}
}

`

const Featured =()=>{
    let {all_products, loading} = useProductContext();

    if(loading){
        return <div className="loading-spinner" style={{width: "100%",
         display: 'grid', placeItems: "center", margin: "5rem 0"}}>
            <Spinner animation="grow"/>
        </div>
    }
    const featured = all_products.filter(product => product.featured === 'true')
    
    return <Container >
    <h4 className='h4'>Trending</h4>
   <div className='row'>
    {featured.slice(0,4).map(item =>{
        const {_id, name, images, price} = item
     return (
         <div key={_id} className='featured-boxes col-sm-12 col-md-3'>
            <img src={images} alt='name' className='featured-images'/>
            <div className='overlay'></div>
            <div className='popup'>
                <h5>{name.length > 35 ? name.slice(0, 35) + "..." : name}</h5>
                <p>₦{NumberFormat(price)}</p>
                <Link to={`/shop/${_id}`}>
                <ButtonComponent className='buy-button'>
                Buy Now
                </ButtonComponent>
                </Link>
            </div>
        </div>
        )
    })}
    </div>
    </Container>
}

export default Featured