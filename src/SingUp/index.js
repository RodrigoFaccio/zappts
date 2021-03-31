import React,{useState} from "react";
import imagem  from '../assets/img1.jpg';
import { GoogleLogin } from 'react-google-login';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Link} from 'react-router-dom';


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
    ForgotPassword,
    DivOr,
    TextOr,
    TextOr2,
    TextText,
    DivGoogle,
    ButtonGoogle,
    Cadastro,
    TextError,
    Invison,


 } from "./styles";
import styled from "styled-components";

export default function Login({ boxData }) {
  const schema = yup.object().shape({
    email:yup.string().email('o e-mail está incorreto').required('Este campo não pode ser vazio'),
    password:yup.string().min(6,'Minimo de 6 caracteres').required(),
    name:yup.string().required('Este campo não pode ser vazio'),
    

  });
  const {register,handleSubmit,errors} = useForm({
    resolver:yupResolver(schema),
  });
  const newUser =(user)=> {
    console.log(user);
  };
  const styleError ={
  ' border-color':'red',
  }
 
  
  return (
    <Container>
      <BoxImage>
        <Carousel autoPlay="true" infiniteLoop="true" width="100%"  >
                  <div >
                    <Imagem src={imagem} />
                  </div>
                  <div>
                    <Imagem src={imagem} />

                  </div>
                  <div>
                    <Imagem src={imagem} />

                  </div>
          </Carousel>
      </BoxImage>
      <BoxForm>
        
        <DivForm>
          <Form  onSubmit={handleSubmit(newUser)} noValidate>
          <Invison>
              Invision
            </Invison>
            <Welcome>
              Getting Started 
            </Welcome>
            <TextError>
            {errors.name?.message}
            </TextError>
            <Label>
              Full Name
            </Label>
            <Input name="name" style={errors.name?.message?{borderColor:'red',outlineColor:'red'}:{borderColor:'black',outlineColor:'black'}}  type="text" ref={register}/>
            <TextError>
            {errors.email?.message}

            </TextError>
            <Label>
              Email
            </Label>
            <Input name="email" style={errors.email?.message?{borderColor:'red',outlineColor:'red'}:{borderColor:'black',outlineColor:'black'}}  type="email" ref={register}/>
            <TextError>
            {errors.password?.message}

            </TextError>

            <Label>
              Password
            </Label>
            <Input style={errors.password?.message?{borderColor:'red',outlineColor:'red'}:{borderColor:'black',outlineColor:'black'}} name="password"  type="password" ref={register}/>

            <ForgotPassword>
              Forgot password
            </ForgotPassword>
            <ButtonSign type="submit">
              Sign up
            </ButtonSign>
          
             <TextText>
               or
             </TextText>
              
            <DivGoogle>
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="                Sign in with Google
                "
                
                cookiePolicy={'single_host_origin'}
              />
              <Cadastro>
                New Invision?
                <Link style={{color:'#BAD1C7'}} to="/">Log in</Link>
              </Cadastro>
              
            </DivGoogle>
            
            

          </Form>
        
        </DivForm>
      </BoxForm>
      
    </Container>
  );
}