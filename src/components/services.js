import React from 'react';
import {OurServices} from '../utility/constants'
import styled from 'styled-components'


const Container = styled.div`
font-size: 0.9rem;
height: auto;
width: auto;
margin: 0 1px;
*{
    background:var(--background-color-3);
    color: var( --text-color-2);
    text-align: center;
}
.service{
   display:flex;
   justify-content: center;
    
}
.inner{
   box-sizing: border-box;
   margin: 2rem 1rem;
   padding: 0.5rem 1rem;
   border: 2px solid var(--text-color-2);
   border-radius: 7px
} 
.title{

}
.icon{
    font-size: 2rem
}
@media screen and (min-width: 767px){
    font-size: 1.1rem;
    h5{
        font-size: 1.4rem
    }
}
` 

const Services =()=>{
    
    return <Container className='row'>
    {OurServices.map(service =>{
        const {name, icon, text} = service;
        return (
            <div className='service col-sm-12 col-md-4'>
            <div className='inner'>
                <div className='icon'>{icon}</div>
                <h5 className='title'>{name}</h5>
                <p className='text'>{text}</p>
            </div>
        </div>
        )
    })}
    </Container>
}

export default Services