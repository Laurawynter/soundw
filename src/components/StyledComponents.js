import styled from "styled-components";
/*import Footer from './Footer';*/

/*export default function styledComponents (){

    return
    <>
    Styled-Components
    </>
}*/

export const M = styled.main`
  display: flex;
  gap: 3em;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  color: white;
  padding: 0;
  background-color: #2f303a;
  height: 50vh;
  z-index: 1;
`;

export const Girl = styled.img`
  width: 25em;
  height: 25em;
  margin-right: 5em;

  .h1 {
    font-family: poppings;
    font-size: 3em;
    display: block;
    align-items: center;
  }

  .p {
    font-family: poppings;
    font-size: 1.5em;
    display: block;
    align-items: center;
    margin-left: 1.5em;
    bottom: 150px;
  }
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
  background-color: #202027;
  margin: 4em;
  margin: 3em;
  padding: 2em;
  border-radius: 15px;
  width: 25em;
`;

export const DiscoverC = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  color: white;
  background-color: #2f303a;
  height: 50vh;
`;
export const T = styled.h1`
  font-size: 5em;
  margin-left: 1em;
  font-family: poppings;
`;

export const P = styled.text`
  font-family: poppings;
  font-size: 1.5em;
  display: block;
  margin-left: 3em;
`;
export const Cov = styled.img`
  width: 20em;
  height: 20em;
  margin-left: 17em;
`;

export const BoxA = styled.div`
  display: flex;
  background-color: black;
  height: 2em;
`;

export const BoxC = styled.div`
  display: flex;
  background-color: black;
  height: 2em;
`;

export const BoxM = styled.div`
  display: flex;
  background-color: black;
  height: 2em;
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
export const JoinSec = styled.div`
  color: #fff;
  widht: 50px;
  height: 50px;
  background-color: #2f303a;
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
  display: flex;
  align-content: row;
  margin-bottom: 5px;
  font-size: 60px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#F7F8FA" : "#202027")};
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
  background-color: #202027;
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
  margin-bottom: 25px;
  border: 1px solid;
  border-radius: 4px;
  background-color: #202027;
  border-color: #2e3852;
  color: #fff;
`;
export const FormButton = styled.button`
  background-color: #1762a7;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
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
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 1em;
  border: 2px solid black;
  padding: 10px;
  &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) => (primary ? "#2796FF" : "#2796FF")};
  }
`;

export const JoiS = styled.div`
  display: flex;
  align-items: right;
  float: right;
  color: white;
  width: 200px;
  height: 200px;
`;

export const Wrapper = styled.div`
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  widht: 100%;
  height: 18px;
  clear: both;
  bottom: 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  text-decoration: none;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #000000;
  }

  .title {
    color: white;
    text-decoration: none;
    font-family: poppings;
    font-size: 5em;
    display: block;
    align-items: center;
    margin-left: 3em;
  }
`;
