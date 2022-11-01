import styled from 'styled-components';

export const NavMenu = styled.nav`

height: 80%;
font-size: 1em;
/* Fix your navbar by using below two lines of code */
position: sticky;
top:0;
/* Fix your navbar by using above two lines of code */
/*z-index:1;*/
@media screen and (max-width: 915px) {
transition: 0.8s all ease;
}
`;
export const NavContainer = styled.div`
display: flex;
justify-content:space-around;

margin-bottom:4em;
margin-left:5em;
color:white;

.NBar{
  display:flex;
  
} 

img.logo {
  height:60px;
  widht:60px;
  margin-left:5em;
}

`;
export const NavLogo = styled.a`
color: #202027;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: left;
margin-left: 24rem;
text-decoration: none;

`;



export const NavItem = styled.li`
display:none;
list-style-type: none;
text-decoration: none;
color: #5e5e5e;
gap:2em;
  
  a:hover {
  opacity: 1;
  }

`;
export const NavLinks = styled.div`
color: white; 
text-decoration: none; 
cursor: pointer; 
&.active { 
color: #000000; 
} 
`;
