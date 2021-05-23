import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {Spinner} from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div`
min-height: 100vh;
width: 100%;
display: grid;
place-items :center;
`


const AuthWrapper =({children})=>{

  const { user, isAuthenticated, isLoading, error } = useAuth0();

  if(isLoading){
      return <Container >
          <Spinner animation="grow"/>
      </Container>
  }

  if(error){
    return <Container>{error.message}</Container>
  } 

  return <>{children}</>
}

export default AuthWrapper;