import React from 'react'
import {useFilterContext} from '../contexts/filterContext'
import {ItemsProperties} from '../utility/helpers'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
${'' /* padding: 0.4rem 0; */}

input{
    width: 90%;
    margin-left: 5%;
}

.price{
    cursor: pointer
}
.title{
    margin: 0;
}

`

const Prices = ()=>{
    const {all_products, setFilterValues, filters: {price}} = useFilterContext()

    const prices = ItemsProperties("prices",all_products)
    const pricesToArray = [...prices]
    
    const maxPrice = Math.max(...pricesToArray)
return <Container>
        <div className='title'>Price</div>
      <input type = 'range' value= {price} className='price'
      max={maxPrice} min='0' name='price' onInput={setFilterValues}
      />
    </Container>
}

export default Prices