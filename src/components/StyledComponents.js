import styled from "styled-components";


export const M = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 2em;
  align-content: center;
  color: white;
  background-color: #2f303a;
  height: 20vh;
  font-size:1.5em;
  z-index: 1;
`;

export const Girl = styled.img`
  width: 20em;
  height: 20em;
  margin-right:15em;
  margin-top: 10em;
`;
  export const Titl =styled.h1`
    font-family: poppings;
    font-size: 2.5em;
    display: block;
    align-items: center;
    margin-right:6em;
    
`;

  export const Pa= styled.p`
    display:flex;
    font-size: 1em;
    align-items: center;
    margin-right: 0.5em;
    


`;
export const CircleP = styled.div`
  position: absolute;
  width: 20em;
  height: 20em;
  background-color: #3457b21a;
  border-radius: 50%;
  margin-right: 40em;
  overflow: hidden;
  opacity: 0.33;
  transform: translate(140px, -140px);
  transform: translate(300px, -100px);
`;

export const Circle2 = styled.div`
  position: absolute;
  height: 21em;
  width: 21em;
  background-color: #bc3a801a;
  border-radius: 50%;
  left: 0em;
  transform: translate(140px, -140px);
  transform: translate(300px, -100px);
  opacity: 0.33;
  overflow: hidden;
`;
export const Circle3 = styled.div`
  background-color: violeta;
  transform: translate(300px, -150px);
  transform: translate(600px, -300px);
  opacity: 0.33;
  padding: 2em;
  border-radius: 50px;
  width: 2em;
`;

export const DiscoverC = styled.section`
  display:flex;
   height:30vh;
  justify-content: center;
  align-items: inline-block;
  color: white;
  margin: 8em ; 

`;
export const T = styled.h1`
  font-size: 4em;
  margin-left:7em;
  margin-top:2em;
`;

export const P = styled.text`
  font-family: poppings;
  font-size: 1.5em;
  display: block;
  margin-left: 18em;
  margin-top: 2em;
`;

export const Cov = styled.img`
  width: 25em;
  height: 25em;
  margin-right:25em;
  margin-top: 10em;
`;
 
 export const BoxC = styled.div`
display:flex;
flex-direction:row
justify-content: space-around;
align-content:inline;
widht: 8em;
color:white;
margin -top :0.3em
margin-left: 20em;

`;

export const BoxA = styled.div`
  display: flex;
  background-color:black;
  height: 8em;
  width: 8em;
  margin-bottom: 0.5em;
  margin-right:2em;
  margin-left: 29em;
  color:white;
`;

export const BoxD = styled.div`
  display: flex;
  background-color: black;
  height: 8em;
  width: 8em;
  margin-bottom: 0.3em;
  margin-right: 2em;
`;

export const BoxM = styled.div`
  display: flex;
  background-color: black;
  height: 8em;
  width: 8em;
  margin-bottom: 0.3em;
  margin-right:20em;
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
  height:40em;
  widht:20em;
  justify-content: center;
  color: white;
  margin: 6em ;
  align-items: center;
  margin-left: 18em;
 font-size:1.5em;

  `;
 
 export const CircleJ = styled.div`
  position: absolute;
  width: 30em;
  height: 20em;
  background-color: #3457b21a;
  border-radius: 50%;
  margin-right: 40em;
  overflow: hidden;
  opacity: 0.33;
  transform: translate(140px, -140px);
  transform: translate(300px, -100px);
`;
  export const Title= styled.section`
    display:flex;
    font-size:3.5em;
  


`;
export const JoiS = styled.div`
  display: flex;
  align-items: right;
  float: right;
  color: white;
`;

  export const FooterC= styled.div`
    display:flex;
    padding:2em;
    justify-content: space-around;
    font-weight: bolder;
    background-color: black;
    height: 1.5em;
    widht: 100vh;
    
   
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

  

