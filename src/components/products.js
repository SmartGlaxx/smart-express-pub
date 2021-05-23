import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useFilterContext}  from '../contexts/filterContext'
import {NumberFormat} from '../utility/helpers'
import {Loading} from './index'
import {BuyBtnComponentGrid} from './index'
import {Spinner} from 'react-bootstrap'

const Container = styled.div` 
margin-top: 5rem;

.main{

}
${'' /* .inner-container{
    background: green;
    
} */}
.product{
    background: none;
    height: auto;
    text-decoration: none;
    ${'' /* padding: 0.5rem; */}
    margin: 2rem 0;
    padding: 0.5rem;
    position: relative;
 box-shadow:
  0 6.7px 5.3px rgba(0, 0, 0, 0.026),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 100px 80px rgba(0, 0, 0, 0.07)
;    
}
.product:hover .product-image{
    transform:scale(1.1);
}
.product:hover .product-name{
    transform: translateY(-4rem);
    color: #fff;
    font-weight: 700;
    
}
.product:hover .overlay{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translate(0%);
    transition: all 0.3s
}
.details{
    background: var(--background-color-4);
    padding: 0.5rem;
    width: 100%;
    height: auto;
} 
.buy-btn{
    background: none;
    text-decoration: none;
    color: var(--text-color-2);
}
.buy-btn:hover{
     color: var(--text-color-1);
}
.product-image{
    width: 100%;
    transition: all 0.3s
}
.overlay{
    position: absolute;
    width: 0px;
    height: 0px;
    background: rgba(20,20,20, 0.5);
    top: 50%;
    left: 50%;
}
.image-guard{
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    padding: 0.5rem;
    background: var(--background-color-4);
}
.product-name{
    font-weight: 400;
    font-size: 0.95rem;
    background:none;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    color: var(--text-color-1);
    ${'' /* margin-top: -1rem */}
}
.product-price{
    background:none;
    font-size: 0.9rem;
    font-weight: 900;
    color: var(--text-color-3);
}
.shipping{
    background:none;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--text-color-3);
    bottom: 0px;
    position: absolute
}
.error{
    min-height: 100vh;
    width: 100%;
    display: grid;
    place-items :center;
}
`
const Products = ()=>{
    const {all_products, filtered_products : products, loading, error} = useFilterContext()
 
    
    if(products.length == 0){
        return <div style={{width: "100%",
         display: 'grid', placeItems: "center", margin: "5rem 0"}}>
            <Spinner animation="grow"/>
        </div>
    }

     
    if(error){
        return <div className='error'>{error.message}</div>
    }     

    return (
        <Container className='main row'>
            {products.map(filtered =>{
                const {_id, images, name, price, shipping} = filtered

                return <div className='product col-sm-6 col-md-4'>
                    <div className='image-guard'>
                        <img src = {images} alt='name' className='product-image'/>
                        <div className='overlay'></div>
                    </div>
                    <div className='details'>
                        <div className='product-name'>{ name}</div>
                        <p className='product-price'> ₦{NumberFormat(price)}</p>
                        {shipping == 'true' ? <p className='shipping'>Free Shipping</p> : <p  className='shipping'>Shipping: ₦{NumberFormat(price * (5/100))}</p>}
                        
                        <Link to= {`shop/${_id}`} className='buy-btn' >
                        <BuyBtnComponentGrid >
                            buy
                        </BuyBtnComponentGrid>
                        </Link>
                    </div>
                    
                </div>
            })}
        </Container>
    )
}


export default Products
