import { Routes, Route  } from "react-router-dom";
import Main from "../Pages/Main";
import Discover from "../Pages/Discover";
import Join from "../Pages/Join";

export default function Router() {
return(
<>
<Routes>
<Route exact path='/' element={<Main/>}/>
<Route exact path='/discover' element={<Discover/>}/>
<Route exact path ='/join' element={<Join/>}/>
</Routes> 
</>
)} 
