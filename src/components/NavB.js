import styled from 'styled-components';

export const NavMenu = styled.nav`

height: 80%;
font-size: 1em;
/* Fix your navbar by using below two lines of code */
position: sticky;
top:0;
/* Fix your navbar by using above two lines of code */
/*z-index:1;*/
@media screen and (max-width: 660px) {
transition: 0.8s all ease;
}
`;
export const NavContainer = styled.div`
display: flex;
justify-content:space-around;
margin-top:2.5em;
margin-left:2em;
color:white;

.NBar{
  display:flex;
   gap:2em;
 
     
}
img.logo {
  height:7em;
  margin-left:1.5em;}

`;
export const H2 =styled.section`
font-size:2.75em;
margin-top:0.5em;
`;

export const NavItem = styled.li`
display:flex;
list-style-type: none;
text-decoration: none;
gap:2em;
margin-top: 0.5em;
font-size:1.5em;
  
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
