import React, {useState} from 'react'
import {useFilterContext} from '../contexts/filterContext';
import styled from 'styled-components'


const Container = styled.div`

.search{
    width: 95%;
    height: 3rem;
    border: none;
    color: var(--text-color-1);
    margin: 2.5%;
    padding: 1rem;
    outline: none;
    font-size: 0.9rem;
    box-shadow:
  0 2.3px 1.9px rgba(0, 0, 0, 0.018),
  0 5.4px 4.3px rgba(0, 0, 0, 0.026),
  0 9.7px 7.7px rgba(0, 0, 0, 0.032),
  0 16.1px 12.8px rgba(0, 0, 0, 0.038),
  0 26.5px 21.2px rgba(0, 0, 0, 0.044),
  0 46.2px 37px rgba(0, 0, 0, 0.052),
  0 100px 80px rgba(0, 0, 0, 0.07)
;
}
`

const Search = ()=>{
    const {filters: {search}, setFilterValues} = useFilterContext()

    return <Container>
    <form>
        <input type='text' name='search' placeholder='Search' value={search}
         onChange ={setFilterValues} className='search'/>

    </form>
    </Container>
}

export default Search