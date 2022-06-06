import styled from 'styled-components';

export const Nav = styled.nav`
background:#2F303A ;
height: 80px;
display: flex;
justify-content: center;
flex-wrap:wrap;
align-items: center;
font-size: 1rem;
/* Fix your navbar by using below two lines of code */
position: sticky;
top:0;
/* Fix your navbar by using above two lines of code */
z-index: 10;
@media screen and (max-width: 960px) {
transition: 0.8s all ease
}
`;
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-content :center;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
position:sticky;
background-color:
flex-wrap:wrap;

h2{
  color: white;
  margin-right:50%;
  display :flex;
  padding:1em;
  witdth:50%;
  max-widht:600px:
  height:300px;

    

`;
export const NavLogo = styled.a`
color: #202027;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: left;
margin-left: 24px;
font-family:poppins;
text-decoration: none;

`;

export const NavMenu = styled.div`
display: flex;
align-items:center;
list-style: none;
text-align: center;
margin-right: -22px;
@media screen and (max-width: 960px) {
display: none;
}
`;
export const NavItem = styled.li`
height: 80px;
display:inline-block;
list-style-type: none;
text-decoration: none;
color: #5e5e5e
margin-right: 2em;
  }
  a:hover {
  opacity: 1;
  }

`;
export const NavLinks = styled.div`
color: white; 
display:flex;
display:inline-block;
margin: 1em;
align-items: end; 
text-decoration: none; 
padding: 0 2rem; 
height: 100%; 
cursor: pointer; 
&.active { 
color: #000000; 
} 
`
