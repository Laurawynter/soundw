import styled from "styled-components";


export const M = styled.main`
  display: flex;
  text-align:center;
  align-items: center;
  margin-top: 2em;
  align-content: center;
  color: white;
  background-color: #2f303a;
  height: 40vh;
  z-index: 1;
  font-size:1.5em;

`;

export const Girl = styled.img`
  width: 20em;
  height:20em;
  margin-top: 20em;
  margin-left:4em;
`;
export const I = styled.div`
margin-top: 15em;
margin-left:6em;

`;
 
  export const Titl =styled.h1`
    font-size: 2.5em; 
`;

  export const Pa= styled.p`
   font-size: 1em;

`;
export const CircleP = styled.div`
  position: absolute;
  width: 20em;
  height: 20em;
  background-color: #3457b21a;
  border-radius: 50%;
  left: 60em;
  opacity: 0.5;
  bottom: 1em;
  transform: translate(300px, -100px);
`;


export const Circle2 = styled.div`
  background-color:#3457b21a;
  opacity: 0.33;
  padding: 10em;
  border-radius: 50%;
  transform: translate(760px, 2px);
  position: absolute;
 

`;
 
 export const Circle3 = styled.div`
 background-color:#bc3a801a;;
 border-radius: 50%;
 opacity: 0.33;
 padding: 8em;
 left: -5em;
 transform: translate(200px, 300px);

`;

export const D = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
height:10vh;
color: white;
margin-left:-4em;
margin-top:1em;
padding:7em;
font-size: 2em;

`;

export const BC =styled.div`
display:flex;
margin-left:10.5em;
gap:0.2vh;

`;
 export const BA = styled.div`
    background-color:black;
    height:3em;
    width: 3em;
    margin-right:1em;
    padding: 0.5em;
 `;
 export const BM = styled.div`
    background-color: black;
    height: 3em;
    width: 3em;
    margin-right:1em;
    padding: 0.5em;

 `;
export const BD = styled.div`
    background-color: black;
    height:3em;
    width: 3em;
    margin-bottom: 0.3em;
    padding: 0.5em;
`;
export const T = styled.h1`
display:flex;
margin-top:2em;
margin-left:5em;


 `;

export const P = styled.text`
font-size: 0.8em;
margin-left: 11em;
padding:1em;

 `;

export const Cov = styled.img`
  float:right;
  width: 15em;
  height:15em;
  margin-top: -14em;
  margin-right:4.5em;
`;
 
export const JoinB = styled.button`
  display: flex;
  align-content: center;
  background-color: ${(props) => (props.isRed ? "red" : "blue")};
  color: white;
  border: none;
  padding: 6px;
  border-radius: 6px;
`;

export const JoinSec= styled.div`
color:#fff;
background-color: #2F303A
widht: auto
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;
export const InfoColumn = styled.div`
  maxim-bottom:50vh;
  padding-left:20vh;
  flex: 1;
  flex-basis: 50vh;
  flex-basis: 100%;
  display: flex;
  justify-content: center;
  
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;
export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
   
`;
export const Form = styled.form`
  background-color: #202027;
  max-width: 660px;
  height: 20em;
  width: 50em;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  margin-bottom: 25px;
  border: 1px solid;
  border-radius: 4px;
  background-color: #202027;
  border-color: #2e3852;
  color: #fff;
`;
export const FormButton = styled.button`
  background-color: #1762a7;
  height: 100%;
  border: none;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) => (primary ? "#2796FF" : "#2796FF")};
  }
`;
export const Joinbutton = styled.button`
  background-color: blue;
  position: absolute;
  justify-content: center;
  cursor: pointer;
  font-size: 1em;
  border-radius: 2px solid black;
  padding: 10px;
  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) => (primary ? "#2796FF" : "#2796FF")};
  }
`;
export const JC=styled.div`
  display:flex;
  height:25em;
  justify-content: center;
  color: white;
  margin: 6em ;
  align-items: center;
  margin-left: 16em;
 font-size:1.5em;

  `;
 
  export const CircleJ = styled.div`
  position: absolute;
  background-color: #3457b21a;
  right: 60em;
  padding:19em;
  bottom:-20em;
  background-color: #bc3a801a;
  border-radius: 50%;
  margin-right: 38em;
  overflow: hidden;
  opacity: 0.4;
  transform: translate(1000px, -350px);
 `;
 export const CircleM = styled.div`
  position: absolute;
  right: 50em;
  padding:9em;
  bottom:-26em;
  background-color:#3457b21a ;
  border-radius: 50%;
  margin-right: 18em;
  overflow: hidden;
  opacity:0.4;
  transform: translate(700px, -1400px);
 `;
  export const Title= styled.section`
    display:flex;
    font-size:3.8em;
`;

export const JoiS = styled.div`
  display: flex;
  align-items: right;
  float: right;
  color: white;
`;

  export const FooterC= styled.div`
  
    display:flex;
    padding: 3em;
    height:2vh;
    widht: 100vh;
    margin: 0.2rem 0;
    align-items: center;
    justify-content: space-around;
    font-weight: bolder;
    background-color:black;
   
    /*  poner footer abajo */
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;



`;
export const FooterLink = styled.a`
  color: white;
  margin-right: 1em;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  `;

  

