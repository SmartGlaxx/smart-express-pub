import React from 'react'
import styled from 'styled-components'
import {Spinner} from 'react-bootstrap'

const Container = styled.div`
min-height: 50vh;
display: grid;
place-items: center
`

const Loading = ()=>{
   return <Container >
      <Spinner animation="grow" />
   </Container>
}

export default Loading