import React from 'react';
import styled from 'styled-components'
import 'boxicons';
import { BsFillGridFill, BsList } from 'react-icons/bs'
import {useFilterContext} from '../contexts/filterContext'

const Container = styled.div`
background: var(--background-color-1);
color: black;
width: 100%;
height: 3rem;
display: flex;
justify-content: space-between;
font-size: 0.8rem;

.grid, .list{
    cursor: pointer;
    color: var(--text-color-1);
    background: none;
    font-size: 1.5rem;
    margin: 0 0.3rem;
    padding: 0.1rem;
    border-radius: 0.1rem;
    border: 1px solid var(--text-color-1)
}
hr{
    height: 3px;
    background: red
}
.select{
    cursor: pointer;
    border-radius: 0.22rem;
    border: 1px solid var(--background-color-3);
    color: var(--text-color-1);
    outline: none;
    padding: 0.2rem 0.5rem
}
@media screen and (max-width: 767px){
    padding: 2rem
}
`
export const Sort = ()=>{
    const {setView, setSortValue} = useFilterContext()
   
    return <Container>
    <div>
        <BsFillGridFill className='grid' onClick={()=>setView("grid")}/>
        <BsList className='list' onClick={()=>setView('list')}/>
  </div>
  <hr/>
  <form >
  <select className='select' name='sort' onChange={setSortValue}>
    <option >Sort by</option>
    <option value='lowest'>Price (Lowest)</option>
    <option value='highest'>Price (Highest)</option>
    <option value='a-z'>Name (A-Z)</option>
    <option value='z-a'>Name (Z-A)</option>
  </select> 
  </form>
    </Container>
}

