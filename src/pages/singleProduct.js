import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {url} from '../utility/constants'
import {Loading, PageHero, AddToCart, MiniButtonComponent} from '../components'
import {NumberFormat} from '../utility/helpers'
import {useCartContext} from '../contexts/cartContext'

const Container = styled.div`
min-height: calc(100vh - 5rem);
color: var(--text-color-1);
background: var(--background-color-1);
padding-top: 4rem;
margin-bottom: 5rem;

.main{
  margin: 15px auto; 
  position: relative; 
  width: 95%;
}
.inner-container{
    padding:  0 10%
}

.main-img{
    width: 100%;
    height: auto;

}

.sub-img{
    width: 20%;
    height: auto;
    cursor: pointer;
    opacity: 0.8;
   
}
.sub-img-container{
    width: 75%;
    margin: auto;
    min-width: 20rem;
}
.main-img-small{
    opacity: 1;
    border: 4px solid var(--background-color-2)
}
.main-img-container{
    display: flex;
    height: 75%;
    width: 75%;
    margin: auto;
    min-width: 20rem;
}
.images{
    ${'' /* background: blue; */}
    padding: 0
}
.name{
    word-wrap: break-word;
    break-word: break-all
}
.details{
    font-size: 0.9rem;
    margin: 1rem 0; 
    ${'' /* background:red */}
}
.detail-name{
    font-weight: 600;
    
}
.colors{
    width: 15px;
    height: 15px;
    border: 1px solid var(--text-color-3);
    border-radius: 5px;
    margin: 0 0.3rem;
}

.shipping{
    background:none;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--text-color-3);
    ${'' /* position: absolute;
    bottom: 0.5rem */}
}

@media screen and (max-width: 767px){
    padding: 5rem 0px;
    .main-img-container, .sub-img-container, .details{
        min-width: 5rem;
        width: 100%;
        ${'' /* background: green */}
    }
    .inner-container{
        padding: 0%;
        margin-top: 2rem;
    }
    .description-box{
       margin-top: 3rem
    }
    .cart-btns{
        display: flex;
        justify-content: space-between
    }
}
`

const SingleProduct =()=>{
    const {selectColor} = useCartContext()
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [loading, setloading] = useState(true)
    const [mainImage, setMainImage] = useState(0)
    const [selectedColor, setSelectedColor] = useState('')

    const fetchSingleProduct = async(url)=>{
        setloading(true)
        const response = await fetch(url)
        const data = await response.json()
        const {product}= data

        setProduct(product)
        setloading(false)
    }

    const setImage =(i)=>{
        setMainImage(i)
    }
  
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        fetchSingleProduct(`${url}/${id}`)
    }, [])
 
 
      if(loading){
        return <Container><Loading /></Container>
    }
    
       const {_id, name, price, category, colors, company, 
        description, images, stock, shipping} = product
       

        const singleproducts = 'singleproducts'
    return <Container>
        <div className='main' >
        <PageHero title={name} singleproducts={singleproducts}/>
        <div className='inner-container row'>
            <div className='col-sm-12 col-md-6 images'>
                <div className='col-sm-12 main-img-container'>
                    <img src = {images[mainImage]} alt={name} className='main-img' />
                </div>
                <div className='col-sm-12 sub-img-container'>
                    {images.map((image, i) => {
                        return <img src = {images[i]} alt={name} className={`${mainImage == i ? "main-img-small sub-img" : "sub-img"}`}  onClick={()=>setImage(i)}/>
                    })}
                </div>
            </div>
            <div className='col-sm-12 col-md-6 details-box'>
                    <h4 className='name'>{name}</h4>
                    {/* <div>{rating}</div> */}
                    <div className='details'><span className='detail-name'>₦{NumberFormat(price)}</span></div>
                    <div className='details'><span className='detail-name'>Production:</span> {company}</div>
                    <div className='details'><span className='detail-name'>Category:</span> {category}</div>
                    <div className='details'><span className='detail-name'>In stock:</span> {stock} pieces</div>
                    {shipping == 'true' ? <p className='shipping'>Free Shipping</p> : <p  className='shipping'>Shipping: ₦{NumberFormat(price * (5/100))}</p>}
                    <hr />
                    <AddToCart _id={_id} itemName={name} stock={stock} colors={colors}  price={price} img={images[0]} shipping={shipping}/>
                    <div className='cart-btns'>
            
                    <Link to='/cart'>
                    <MiniButtonComponent >Add To Cart</MiniButtonComponent>
                    </Link>
                    
                    </div>
            </div>
            <div className='col-sm-12 description-box'>
                <h6>Description</h6>
                <p className='description'>{description.slice(0, 300)}</p>
                <p className='description'>{description.slice(300)}</p>
            </div>
        </div>
        </div>
    </Container>
}

export default SingleProduct