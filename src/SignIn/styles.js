import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: inline;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  margin-left:0;
  height:900px;
  text-align:center;

  
`;

export const BoxImage = styled.div`
  display: inline;
  flex-direction: column;
  float: left;
  max-width:50%;

  

  @media (max-width:770px) {
   display:none;

    
  }

  @media (max-width: 1024px) {
   max-width:50%;
    min-height: ${px2vw(300)};
  }
 
`;

export const BoxForm = styled.div`
justify-content:center;
align-items:center;
text-align:center;
  display: inline;
  max-height:100%;
  
  

  @media (max-width: 375px) {
    justify-content:center;
    align-items:center;
    text-align:center;
  max-height:100%;


    
  }

  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;
export const Imagem = styled.img`
  max-width:100%;
  height:660px;
 
  max-height:100%;
  @media(max-width:845){
    display:none;
  }
`;
export const Logo = styled.h2`
display:inline;
  font-size:30;
  float: left;

  
`;
export const DivForm = styled.div`
display:flex;
  border-width:2;
  justify-content:center;
  align-items:center;
  height:600px;
  max-width:100%;

`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width:90%;

`;
export const  Input = styled.input`
  color:black;
  width:300px;
  padding:5px;
  margin:5px;
  border-top:none;
  border-left:none;
  border-right:none;
  border-bottom-width:0.5px;
  max-width:90%;
  &:focus{
    border:none;
  }


`;
export const Welcome = styled.h2`
  color:#707070;
  margin-bottom:10px;
  max-width:95%;
  @media (max-width: 375px) {
  font-size: ${px2vw(100)}

    
  }

`;
export const Label = styled.label`
display: flex;
  color:#707070;
float: left;
font-size:10px;
max-width:90%;

 
`;
export const ButtonSign = styled.button`
text-align:center;

justify-content:center;
align-items:center;
text-align:center;
margin-left:30%;

margin-top:20px;
  background-color:gray;
  width:100px;
  height:30px;
  border:none;
  border-radius:50px;
  color:white;
 

`;

export const ForgotPassword = styled.p`
    color:#707070;
margin-top:10px;

    font-size:10px;
    margin-left:180px;

`;

export const TextText = styled.p`
    color:#707070;
    margin-left:-20px;
    margin-top:30px;

`;
export const DivGoogle = styled.div`
   margin-top:30px;
`;
export const ButtonGoogle = styled.button`
   margin-top:30px;
   background-color:white;
   border-radius:50px;
   
`;
export const Item =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;
export const Cadastro =  styled.div`
     color:#707070;
     margin-top:40px;
     font-size:12px;
`;
export const TextError =  styled.div`
     color:red;
     font-size:12px;
     margin-top:4px;
     margin-bottom:15px;
`;
export const Invison =  styled.h2`
margin-left:240px;
margin-bottom:40px;
`;
