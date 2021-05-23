import React, {useState} from 'react'
import {useFilterContext}  from '../contexts/filterContext'
import styled from 'styled-components'
import {ItemsProperties} from '../utility/helpers'

const Container = styled.div`
padding: 0.4rem 0;

.category-btn{
    background: none;
    color: var(--text-color-1);
    display: block;
    border: none;
    font-size: 0.8rem;
    padding: 0.3rem 1rem;
    width: 100%;
    text-decoration: none
}
.btn-wrap{
    width: 100%
}
.active{
    width: 95%;
    margin: 0 2.5%;
    border-radius: 5px;
    background: var(--background-color-2);
    color: var(--text-color-2)
 }
`

const Categories = ()=>{
    const {all_products, setFilterValues, filters: {category}} = useFilterContext()
    let [clicked, setClicked] = useState('')

    const setActive =(category)=>{
        setClicked(category)
    }
   
    const categoryItems = ItemsProperties("category",all_products)
    const categoryToArray = ["All", ...categoryItems]
    return <Container>
        <div className='title'>Category</div>
        {categoryToArray.map((item, i) =>{
            if(category == 'All'){
                clicked = 'All'
            }
            return<div onClick={()=>setActive(item)} className='btn-wrap'>
            <button key ={i} className={`${item == clicked ? "active" : "category-btn"}`} onClick={setFilterValues} 
             name='category' value={category} >
                {item}
            </button>
            </div>
        })}
    </Container>
}

export default Categories