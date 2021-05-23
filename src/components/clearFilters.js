import React from 'react'
import {useFilterContext} from '../contexts/filterContext'
import styled from 'styled-components'
import {ButtonComponent} from './index'

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    border: none;
    margin-bottom: 1rem;
    padding-bottom: 1rem
`

const ClearFilters = ()=>{
    const {clearFilters} = useFilterContext()

return <Wrapper onClick={clearFilters}>
<ButtonComponent  className='button'>
      Clear Filters
    </ButtonComponent>
</Wrapper>
}

export default ClearFilters