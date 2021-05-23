import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {FaMinus, FaPlus} from 'react-icons/fa'
import {useCartContext} from '../contexts/cartContext'

const Container = styled.div`
    ${'' /* display: flex; */}
    ${'' /* align-items: center;
    justify-content: center; */}
    ${'' /* text-transform: uppercase; */}
    ${'' /* background:  var(--button-background); */}
    

button{
    ${'' /* text-transform: uppercase; */}
    background:  var(--button-background);
    color: var(--button-background);
    border: none;
    ${'' /* float: right; */}
    padding: 0.3rem 1rem;
    margin: 0 0.5rem;
    outline: none;
    font-size: 0.9rem;
    box-shadow:
    0 3.4px 2.7px rgba(0, 0, 0, 0.053),
    0 8.7px 6.9px rgba(0, 0, 0, 0.075),
    0 17.7px 14.2px rgba(0, 0, 0, 0.095),
    0 36.5px 29.2px rgba(0, 0, 0, 0.117),
    0 100px 80px rgba(0, 0, 0, 0.17);
    
:hover{
    background: var(--button-background-hover);
    color:  var(--button-background);
    position: sticky;
    z-index: 2
    }
}
.buttons{
    background: var(--background-color-2);
    display: flex;
    width: 10rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    padding: 0.2rem
}
.amount{
    color: var(--text-color-1);
    font-size: 1.2rem;
    display: block;
    width: 2rem
}
.colors-box{
    display: flex;
    height: 1rem;
}
.colors{
    width: 15px;
    height: 15px;
    border-raduis: 50%;
    border: none;
    ${'' /* border: 3px solid transparent; */}
    box-shadow:
    0 4.5px 3.6px rgba(0, 0, 0, 0.024),
    0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 30.1px 24.1px rgba(0, 0, 0, 0.046),
    0 100px 80px rgba(0, 0, 0, 0.07)
;
}
.selected{
    border: 3px solid darkgray
}
 .detail-name{
     font-size: 0.9rem;

 }

@media screen and (max-width: 767px){
   margin: 0 auto;
   .buttons{margin: 2rem auto}
}
 `

 const AddToCart = ({_id, itemName, stock, colors, price, img, shipping})=>{
     const {setItemProperties, setAmount, setSelectColor, amount, cartItems} = useCartContext()
     const [selectedColorNum, setSelectedColorNum] = useState(0)
     

     const minusAmount =(amount)=>{
         setAmount(amount, 'minus')
     }
     const addAmount = (amount)=>{
         setAmount(amount, 'add')
     }
     const setColor =(color, i)=>{
         setSelectedColorNum(i)
         setSelectColor(color)
     }
    useEffect(() => {
         const itemcolor = colors[0]   
        setItemProperties(_id, itemName, img, price, itemcolor, stock, shipping)
    }, [])
     useEffect(() => {
         setSelectedColorNum(0)
        
        }, [])
//  console.log('selectColor', selectColor)
     return <Container> 
        <div className='colors-box'>
        <span className='detail-name'>Colors:</span>
            {colors.map((color, i) =>{
                return <button style={{background: `${color}`}} className={`${selectedColorNum == i ? 'colors selected' : 'colors'}`}
                onClick={()=>setColor(color,i)}
                ></button>
            })}
        </div>
            <div className='buttons'>
         <button 
         onClick = {()=>minusAmount(amount)}
         ><FaMinus /></button>
            <span className='amount'>{amount}</span>
         <button
           onClick = {()=>addAmount(amount)}
         ><FaPlus /></button>
         </div>
         </Container>
 }

 export default AddToCart;