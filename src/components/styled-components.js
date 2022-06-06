
import styled from 'styled-components'
import Main from './Main.js';
import Footer from'./Footer.js';
import Discover from './Discover.js';




/*export default function styledComponents (){

    return
    <>
    Styled-Components
    </>
}*/


export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #5cb85c;


`;

export const CuartoC = styled.div`
width: 50px; 
height: 50px; 
border: 2px solid #555; 
background: #5cb85c;
border-radius: 0 100% 0 0;

`;
export const Circle3 = styled.div`
width:20%;
height:20%;
background-color :#rgba(52,87,178,0.1) ;
position: absolute;
`
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
display:flex;
align-content :row;
margin-bottom: 5px;
font-size: 60px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? '#F7F8FA' : '#202027')};
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
 export const Joinbutton = styled.button`
  background:blue;
  position:absolute;
  display :flex ;
  justify-content:center;
  cursor: pointer
  font-size:1em
  border:2px solid black;
  padding: 10px;
  &:hover {
  transition: all 0.3s ease-out;
  background:#2796ff ;
  background-color: ${({ primary }) =>
    (primary ? '#2796FF' : '#2796FF')};
    }
   
`;

export const MainC =styled.div`
position:absolute;
display:flex
align-items:center;
justify-content:center;
text-align:center;
margin-right: 20%;

`;

export const ImgG=styled.div`
display:flex;
align-items:center;
justify-content: center;
margin-right: 20%;
margin-left:20%;
margin-top:20%;
`;


h1{
  display:flex:
  justify-content:center;
  text-align:center;
  color:white;
  font-size:20px;
  padding:1em;
  line-height: 1.2em;	 


p{
  display:flex;
justify-content: space-between;
  text-align:center;
  color:white;
  font-size: 20px;
}
`;


export const DiscoverC = styled.div`
display:flex;
display:inline-block;
margin-right: 50%;
 flex-wrap: wrap;
text-align:center;
justify-content:center;
flex-wrap:wrap;

}
 
.wrapper h1 {
  text-align: center;
  width: 100%;
}
`;
/*export const Box=styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  background-color: black;
  
`;

export const Boxes=styled.div`
    background-color:black;
    width: 30%;
    height: 270px;
    padding-left: 15px;
    padding-top: 15px;    
`;

export const BoxA=styled.div`
background-color: black;
padding:0.5em;
margin:20%
float: left;
`;

export const BoxM=styled.div`
background-color: black;
padding: 0.5em;
margin:20%
margin-left: auto;
margin-right: auto;
}

`;

export const BoxE=styled.div`
background-color: black;
padding: 0.5em;
margin:20%
position: absolute ;
margin-top: 0;
float: right;

`;
export const ImgC=styled.div`
display:flex;
flex:float;
float:right;
width: 50px;
height: 50px;
`;
export const JoinB = styled.button`
	background:${props => (props.isRed ? "red" : "blue")};
	color: white;
	border: none;
	padding: 5px;
	border-radius: 5px;
    
`;
  
export const FooterC = styled.div`
display:flex;
justify-content: space-between;
text-align:center;
width:10%;
height:10%;
margin-right: 15%;
padding-right:15%;

`;