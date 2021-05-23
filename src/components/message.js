import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {Form} from 'react-bootstrap';
import styled from 'styled-components';
import {ButtonComponent} from './index';

const Container = styled.div`
color: var(--text-color-1);
width: 90%;
margin: 0.5rem auto;

h4, h6{
    text-align:center
}
.heading{
    color:var(--text-color-1);
    margin: 3rem 0
}
.button{
  float: right
}
@media screen and (min-width: 1200px){
    margin: 0.5rem auto;
}
@media screen and (min-width: 767px){
    width: 50%;
    margin: 0.5rem auto;
}
`

const Message =()=>{
const [state, handleSubmit] = useForm("xeqvewpe");

  if (state.succeeded) {
      return <Container>
    <h4>Send us a message</h4>
       <h6>We would like to hear from you</h6>
      <p>Thanks for joining!</p>
        
    <Form onSubmit={handleSubmit} method="POST" action='https://formspree.io/f/xeqvewpe'>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" id="email" name="email"/>
      <ValidationError prefix="Email" field="email"  errors={state.errors} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control type="textarea" placeholder="Your message" id="message" name="message"  as="textarea" rows={4}/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
  </Form.Group>

  <ButtonComponent  type="submit" disabled={state.submitting} >
    Submit
  </ButtonComponent>
</Form>
</Container>
  }
  return (
      <Container>
      <div className='heading'>
      <h4>Send us a message</h4>
       <h6>We would like to hear from you</h6>
       </div>
    <Form onSubmit={handleSubmit} method="POST" action='https://formspree.io/f/xeqvewpe'>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" id="email" name="email"/>
      <ValidationError prefix="Email" field="email"  errors={state.errors} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control type="textarea" placeholder="Your message" id="message" name="message"  as="textarea" rows={4}/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
  </Form.Group>

  <ButtonComponent  type="submit" disabled={state.submitting} >
    Submit
  </ButtonComponent>
</Form>
</Container>
  );
}
export default Message




