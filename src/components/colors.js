import React, {useState} from 'react'
import {useFilterContext} from '../contexts/filterContext'
import {ItemsProperties} from '../utility/helpers'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip';

const Container = styled.div`
padding: 0.4rem 0;
.wrap{
    background: var(--background-color-4);
    text-align: center;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center ;
    overflow: scroll
}

${'' /* .title{
    padding: 0.7rem 0;
    padding-left: 1rem;
    font-size: 0.8rem
} */}
.color-btn{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin: 0.1rem;
    ${'' /* border: 1px solid darkgray; */}
    border: 3px solid transparent
}
.color-btn-wrap{
    border-radius: 50%;
    background: none
}
.active{
    border: 3px solid black
}
@media screen and (max-width: 767px){
    .color-btn{
        width: 1.4rem;
        height: 1.4rem;
        ${'' /* margin: 0 0.2rem */}
    }

}
@media screen and (max-width: 340px){
    .wrap{
         justify-content: left;
    }
}
`
const Colors = ()=>{
    const {all_products, setFilterValues, filters:{color: col}} = useFilterContext()
    const [clicked, setClicked] = useState('')

    const colors = ItemsProperties("colors",all_products)
    const colorsToArray = ["All", ...colors]

    const setActive =(color)=>{
        setClicked(color)
    }
    
    return <Container>
        <div className='title'>Colors</div>
        <div className='wrap'>
        {colorsToArray.map((color, i) => {
            
            return <span className='color-btn-wrap' onClick={()=>setActive(color)} >
            <button 
            name='color'
            key={i}
            onClick={setFilterValues}
            value={color}
            className={`${color == col ? "active color-btn" : "color-btn"}`}
            style={{background: `${color}`}}
            data-tip={color.toLocaleUpperCase()}
            data-background-color= '#eee'
            data-text-color = {color}
            ></button>
            <ReactTooltip />
            </span>
        })}
        </div>
    </Container>
}

export default Colors