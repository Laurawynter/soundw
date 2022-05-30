import landingPagegirl from '../images/landing-page-girl.png';


function Homepage (){

return (
<section className = "Home-C">
<img src={landingPagegirl} className="landing-page-girl" alt="landing-page-girl" />
<img src="logo.png"/>
<a href='#Discover' className ="img logo.png">Discover</a>
<a href='#Join' className ="imag logo.png">Join</a>
<h1>Join the fun </h1>
<ul>
<li> "About us"</li>
<li> "Contact "</li>
<li>"Twitter</li>
<li>"Facebook"</li>
<li></li>
</ul>
</section>
);
}

export default Homepage;
 