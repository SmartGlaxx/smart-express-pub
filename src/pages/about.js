import React from 'react';
import styled from 'styled-components'
import card1 from '../assets/hero-cards/card2.jpg'
import {PageHero} from '../components'

const Container = styled.div`   
min-height: calc(100vh - 5rem);
color: var(--text-color-1);
background: var(--background-color-1);
padding-top: 4rem;
margin-bottom: 5rem;

h5{
	text-align:center
}
.title{
    width: 100%;
    margin: 4rem 2rem;
}
.main{
    margin: 15px auto; 
    position: relative; 
    width: 95%;

}
.inner-container{
    padding: 0 2rem;
    display: flex
}
.div-0{
    padding-left: 2rem;
    width: 60%;
    display: grid;
    place-items: center;
    text-align: justify;
    text-justify: inter-word
}
.div-1{
    ${'' /* padding: 2rem; */}
    width: 40%
}
.about-img{
    width: 100%;
}
@media screen and (min-width: 1200px){
    .about-img{
        width: 90%;

    }
}
@media screen and (max-width: 767px){
    padding: 5rem 0px;
    .inner-container{
        display: block
    }
    .div-0{
        padding: 2rem 0;
    }
    .div-0, .div-1{
        width: 100%;
        margin: 0
    }
    .inner-container{
        padding: 1rem;
    }
    .title{
        margin: 2.5rem 0;
        padding: 1rem;
    }
}
`
const About =()=>{

React.useEffect(() => {
  window.scrollTo(0, 0)
}, [])

    
    return <Container>
       <div className='main'>
        <PageHero title='About Us'/>
        <div className='inner-container'>
       <div className='div-1'>
        <img src = {card1} alt='' className='about-img'/>
       </div>
       <div className='div-0'>
        <h5>We Are Your Number One Store</h5>
        <p>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Aliquam sodales urna orci,
            id pellentesque nulla mattis eu. Integer 
            sit amet fermentum nibh. Nulla gravida 
            sodales quam vel auctor. Praesent semper 
            quis dui sit amet volutpat. Vestibulum ante
            ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Maecenas
            volutpat tortor eget congue dignissim. 
            Integer aliquam, lacus ut venenatis
        </p>
        <p>
            Suscipit, lacus urna mattis mauris, ut 
            varius est odio non enim. Curabitur 
            tincidunt vitae odio eget malesuada.
            Phasellus eu ultrices diam. Etiam sit
            amet varius felis. Aenean eu porttitor 
            justo. Maecenas fringilla nunc velit,
            id auctor orci consectetur vel. Curabitur 
            quis nisi elit. Fusce ac ante et sem 
            rutrum imperdiet vitae non felis.
            Phasellus commodo nec elit et rhoncus. 
            In eleifend sollicitudin turpis, at tristique nisl.
        </p>
        <p>
            Etiam sit amet varius felis. Aenean eu porttitor 
            justo. Maecenas fringilla nunc velit,
            id auctor orci consectetur vel. Curabitur 
            quis nisi elit. Fusce ac  at tristique nisl.
        </p>
       </div>
       </div>
       </div>
    </Container>
}

export default About