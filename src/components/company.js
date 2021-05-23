import React, {useState} from 'react'
import {useFilterContext} from '../contexts/filterContext'
import {ItemsProperties} from '../utility/helpers'
import styled from 'styled-components'

const Container = styled.div`
 padding: 0.4rem 0;

.select{ 
    cursor: pointer;
    color: var(--text-color-1);
    font-size: 0.9rem;
    width: 90%;
    outline: none;
    margin: 0 5%;
    padding-left: 1rem;
    line-height: 1;
}
.options{
    color: var(--background-color-1);
}
.select-wrap{width: 100%}
@media screen and (max-width: 767px){
    .title{text-align: left}
   .select-wrap{ display: grid;
    place-items: center}
    .select{
        width: calc(100vw/3);   
    }
}
`

const Company =()=>{
    const {all_products, setFilterValues, filters:{company}} = useFilterContext()
    let [clicked, setClicked] = useState('')
    const companyItems = ItemsProperties('company', all_products)
    const companiesToArray = ['All',...companyItems]

    const setActive =(company)=>{
        setClicked(company)
    }

    return <Container>
    <div className='title'>Companies</div>
    <div className='select-wrap'>
        <select
        name='company'
        value={company}
        onChange = {setFilterValues}
        className='select'
        >
        {companiesToArray.map((item, i) =>{
            return <option onClick={()=>setActive(item)} className='options' key ={i} value={item}>{item}</option>
        })}
        </select>    
        </div>
    </Container>
}

export default Company