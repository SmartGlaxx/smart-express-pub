import React, {useState} from 'react';
import styled from 'styled-components'
import {Products, PageHero, Sort, Listview, Filters} from '../components'
import {useFilterContext} from '../contexts/filterContext'

const Container = styled.div`   
min-height: calc(100vh - 5rem);
color: var(--text-color-1);
background: var(--background-color-1);
padding-top: 4rem;
margin-bottom: 5rem;

.main{
  margin: 15px auto; 
  position: relative; 
  width: 95%;
}

.products{
    height: auto;
}
.filters{
    margin-top: 5rem;
    padding-top: 5rem;
    z-index: 0
}

.inner-container{
    padding: 0 2rem
}
.page-hero{
    margin-top: 5rem;
    height: 100vh;
}

@media screen and (max-width: 767px){
    padding: 5rem 0px;
    .inner-container{
        padding: 0
    }
    .filters{
        margin-top: 1rem;
        padding-top: 1rem;
    }
 }
}
`
const ProductsPage =()=>{

React.useEffect(() => {
  window.scrollTo(0, 0)
}, [])


  let {view} = useFilterContext()

    return <Container>
        <div className='main'>
          <PageHero title='Products'/>
            <div className='row inner-container'>
            
                <div className='col-sm-12 col-md-3'>
                    <div className='filters sticky-top'>
                       <Filters /> 
                    </div>
                </div>
            
                 <div className='col-sm-12 col-md-9'>
                    <Sort />
                    <div className='products'>
                        {view == 'grid' ? <Products /> : <Listview />}
                    </div>
                </div> 

            </div>
        </div>
    </Container>
}

export default ProductsPage