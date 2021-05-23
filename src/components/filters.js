import React, {useState} from 'react'
import styled from 'styled-components'
import {Search, Categories, Company, Colors, Prices, Shipping, ClearFilters} from './index'
import {MiniButtonComponent} from './index'

const Container = styled.div`
background: var(--background-color-4);
padding: 1rem;
height: auto;


.title{
    padding: 0.7rem 0;
    padding-left: 1rem;
    font-size: 0.8rem;
 
}
h5{
    background: var(--background-color-2);
    background: none;
    color: var(--text-color-1);
    ${'' /* margin-top: 10%; */}
    padding-top: 6rem; 
}
.filter-toggler{
     text-transform: uppercase;
    background:  var(--button-background);
    color: var(--button-background-hover);
    border: none;
    float: right;
    padding: 0.3rem 1rem;
    outline: none;
     overflow: hidden;
    font-size: 0.9rem;
    box-shadow:
    0 3.4px 2.7px rgba(0, 0, 0, 0.053),
    0 8.7px 6.9px rgba(0, 0, 0, 0.075),
    0 17.7px 14.2px rgba(0, 0, 0, 0.095),
    0 36.5px 29.2px rgba(0, 0, 0, 0.117),
    0 100px 80px rgba(0, 0, 0, 0.17);
    display: none;
    :hover{
        background: var(--button-background-hover);
        color:  var(--button-background);
        position: sticky;
        z-index: 2
    }
}

.show{
    display: block
}
@media screen and (max-width: 767px){
    .main{display: none}
    .filter-toggler{display: block}
}
`

export const Filters =()=>{
    const [show, setShow] = useState(false)
    const showFilters=()=>{
        if(show == true){
            setShow(false)
        }else if(show == false){
            setShow(true)
        }
        
    }
    
    return <Container>
            <button className='filter-toggler' onClick = {showFilters}>Filters</button>
          <Search />
          <div className = {`${ show ? 'show' : 'main'}`}>
         <Categories />
          <Company />
          <Colors />
          <Prices />
          <Shipping />
          <ClearFilters />
          </div>
    </Container>
}

