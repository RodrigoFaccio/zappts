import React from "react";
import imagem  from '../assets/img1.jpg'

import { 
  Container,
   BoxImage, 
   BoxForm,
    BoxText,
    Imagem,
    Logo,
    DivForm,
    Form,
    Input,
    Welcome,
    Label,
    ButtonSign,
    ForgotPassword
 } from "./styles";

export default function Login({ boxData }) {
  return (
    <Container>
      <BoxImage>
        <Imagem src={imagem}/>

      </BoxImage>
      <BoxForm>
        
        <DivForm>
          <Form>
            <Welcome>
              Welcome to Invision
            </Welcome>
            <Label for="user"  >User name or Email</Label>
            <Input id="user" type="text"/>
            <Label for="password"  >Password</Label>

            <Input id="password" type="text"/>
            <ForgotPassword>
              Forgot password
            </ForgotPassword>
            <ButtonSign>
              SignIn
            </ButtonSign>
            

          </Form>
        
        </DivForm>
      </BoxForm>
      
    </Container>
  );
}