import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Container = styled.div`
color: var(--text-color-1);
display: flex;
align-items: center;
padding-left: 3rem;
height: 4rem;
background: none;

.main-link{
    background: none;
    color: var(--text-color);
    display: block;
    margin: 0.5rem;
    text-decoration: none;
}
.main-link:hover{
    
}
.link{
    text-decoration: none;
    color: var(--text-color);
}

`

const PageHero = ({title, singleproducts})=>{
    if(singleproducts){
        return <Container>
       <Link to='/' className='link' className='main-link'>Home</Link>/
       <Link to = '/shop' className='main-link'>Products</Link>/ 
       <span className='main-link'>{title}</span>
    </Container>
    }
    return <Container>
       <Link to='/' className='link' className='main-link'>Home</Link>/ <span className='main-link'>{title}</span>
    </Container>
}

export default PageHero