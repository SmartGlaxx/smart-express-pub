import Reaact from 'react'
import {useFilterContext} from '../contexts/filterContext'
import {NumberFormat} from '../utility/helpers'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BuyBtnComponentList} from './index'
import {Spinner} from 'react-bootstrap'

const Container = styled.div`
${'' /* background: red; */}


.listItem{
    width: 95%;
    display: flex;
    text-decoration: none;
    margin: 0.6rem auto;
    border-radius: 15px;
    padding: 0.1rem;
    ${'' /* background: var(--background-color); */}
    background: var(--background-color-4);
     box-shadow:
  0 6.7px 5.3px rgba(0, 0, 0, 0.026),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 100px 80px rgba(0, 0, 0, 0.07); 
  
}

.listItem:hover .overlay{
    width: auto;
    height: auto;
    top: 0rem;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
    transform: translate(0%);
    transition: all 0.3s
}
.listItem:hover .product-name{
    transition: all 1s;
    transform: translateX(-120%)
}
.product-name-slide{
    color: white;
    font-size: 0.8rem;
    transform: translateX(200%);
    position: absolute;
    top: 1rem;
    width: 80%;
    background: none;
    z-index: 1
}
.listItem:hover .product-name-slide{
    transition: all 1s;
    transform: translateX(0)
}
.overlay{
    position: absolute;
    width: 0px;
    height: 0px;
    background: rgba(20,20,20, 0.5);
    top: 50%;
    left: 50%;
    z-index: 0
}
.product-image{
    width: 100%;
    height: auto;
    position: relative
}
.img-box{
    overflow: hidden;
    display: grid;
    border-radius: 10px 0 0 10px;
    place-items: center;
    max-width: 50%;
    min-width: 40%;
    padding: 0.3rem;
    background: var(--background-color-4);
}
.img-wrap{
     width: 80%;
    position: relative; 
    background: brown
}
.details-box{
    margin: 0.4rem 0;  
    box-sizing: border-box;
    position: relative;
    color: var(--text-color-1);
    font-weight: 400;
    font-size: 0.8rem;
    border-radius: 0 10px 10px 0;
    padding: 0.5rem;
    white-space: nowrap;
    overflow:hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    padding-top: 0.5rem;
    ${'' /* max-height: 9rem; */}
    background: var(--background-color-4);
    z-index: 2;
}
.description{
    width: 100%;
}
.product-name{
    white-space: nowrap;
    overflow:hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 0rem;
    background: var(--background-color-4);
}
.product-price{
    font-size: 0.9rem;
    font-weight: 900;
    background: var(--background-color-4);
}

.buy-btn{
    background: none;
    text-decoration: none;
    color: var(--text-color-2);
}
.buy-btn:hover{
     color: var(--text-color-1);
     background: var(--button-background-hover);
}
p{
    background: var(--background-color-4);
    margin: 0;
    width: 95%;
    overflow:hidden;
}
p.second{
    margin: 0;
    background: var(--background-color-4);
    color: var(--text-color-1);
    font-weight: 400;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow:hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
}

.shipping{
    background:none;
    font-size: 0.7rem;
    font-weight: 400;
    color: var(--text-color-3);
    position: absolute;
    bottom: 0.5rem
}

@media screen and (min-width: 500px){
    .img-box{ width: 40%; padding: 0.7rem; min-width: 30%}
    .details-box{  white-space: normal}
    .shipping{font-size: 0.8rem}
}

@media screen and (min-width: 800px){
    .img-box{ width: 30%; padding: 1rem; min-width: 30%}
    .details-box{margin-top: 2rem;  max-height: 12rem; font-size: 1rem}
    .product-name{font-size: 1.1rem}
    .product-name-slide{font-size: 1rem; margin-top: 1rem}

}
 
`

const Listview = ()=>{
    const {filtered_products: products} = useFilterContext()

    if(products.length == 0){
        return <div style={{width: "100%",
         display: 'grid', placeItems: "center", margin: "5rem 0"}}>
            <Spinner animation="grow"/>
        </div>
    }

    return <Container>
        {products.map(item =>{
            const {_id, name, images, price, description, shipping} = item
            return <div className ='listItem'>
                <div className='img-box'>
                    <div className='img-wrap'>
                    <img src ={images} alt={name} className='product-image'/>
                    <div className='overlay'></div>
                     <h6 className='product-name-slide'>{name}</h6>
                     </div>
                </div>
                <div className='details-box'>
                    <h6 className='product-name'>{name}</h6>
                    <p className='product-price'>₦{NumberFormat(price)}</p>
                    <p className='description'>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                    {/* <p className='second'>{description.slice(101, 200)}</p> */}
                    {shipping == 'true' ? <p className='shipping'>Free Shipping</p> : <p  className='shipping'>Shipping: ₦{NumberFormat(price * (5/100))}</p>}

                    <Link to= {`shop/${_id}`} className='buy-btn' >
                        <BuyBtnComponentList >
                        buy
                        </BuyBtnComponentList>
                    </Link>
                    
                </div>
            </div>
        })}
    </Container>
}

export default Listview