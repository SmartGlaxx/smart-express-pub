import React from 'react'
import {useFilterContext} from '../contexts/filterContext'
import {ItemsProperties} from '../utility/helpers'
import styled from 'styled-components'

const Container = styled.div`
padding: 0.4rem 0;
padding-bottom: 0.8rem;
display: flex;
align-items: center;

.title{
    margin-right: 0.5rem
}
.shipping{
    cursor: pointer
}
`

const Shipping = ()=>{
    const {all_products, setFilterValues, filters: {shipping}} = useFilterContext()
    let check = true
    if(shipping == 'all'){
        check = false
    }
return <Container>
      <div className='title'>Free Shipping:</div><input type='checkbox' name='shipping' 
      onChange={setFilterValues} value={shipping} className='shipping'
       checked={check} />
    </Container>
}

export default Shipping