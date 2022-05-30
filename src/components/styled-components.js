import React from 'react';
import styled from 'styled-components'


export default function styledComponents (){

    return
    <>
    <h2>Styled-Components</h2>
    </>
}
export const Container= styled.div`
 {
  background-color:#2F303A;
  width:100 %;
  height:100%;
  margin:0  
  `
;
export const Circle = styled.div`
width:200px; ;
height:200px; 
border-radius: 50%
background-color :":rgba(188,58,128,0.1);
position:relative;
display-flex:left;

`;

`&:hover{
  background-color:transparent;
  }
  `;
export const Circle2 = styled.div`
width:20%;
height:20%;
background-color :#3457b21a;
position:
`;
`&:hover{
background-color:transparent;
}
`;
export const Circle3 = styled.div`
width:20%;
height:20%;
background-color :#rgba(52,87,178,0.1) ;
`;
`&:hover{
background-color:transparent;
}`
;

export const JoinSec = styled.div`
color: #fff;
padding: 200px 0;
background: #2F303A;
`;
export const InfoRow = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
flex-direction: row;
`;
export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 55px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;
@media screen and (max-width: 768px) {
max-width: 100%;
flex-basis: 100%;
display: flex;
justify-content: center;
}
`;
export const Heading = styled.h1`
margin-bottom: 5px;
font-size: 60px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? '#F7F8FA' : '#F7F8FA')};
`;
export const FormWrap = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 400px) {
height: 80%;
}
`;
export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 480px) {
padding: 10px;
}
`;
export const Form = styled.form`
background: #202027;
max-width: 500px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 40px 32px;
border-radius: 15px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
@media screen and (max-width: 480px) {
padding: 32px 32px;
}
`;
export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`;
export const FormInput = styled.input`
padding: 10px 16px;
margin-bottom: 25px;
border: 1px solid;
border-radius: 4px;
background: #202027;
border-color: #2E3852;
color: #fff;
`;
export const FormButton = styled.button`
background: #1762A7;
padding: 10px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 15px;
cursor: pointer;
&:hover {
transition: all 0.3s ease-out;
background:#2796ff ;
background-color: ${({ primary }) =>
(primary ? '#2796FF' : '#2796FF')};
}
`;
