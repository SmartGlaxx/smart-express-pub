import React from 'react';
import styled from 'styled-components';
import {useAppContext} from '../contexts/context'

const Container = styled.div`
background: var(--overlay-background);
position: fixed;
top: 0;
height: 100vh;
width: 100vw;
color: white;
z-index: 11;
`

const Overlay =()=>{
    const {showOverlay, hideMenu} = useAppContext()

    return (showOverlay && <Container onClick={hideMenu}>        
    </Container>)
}

export default Overlay