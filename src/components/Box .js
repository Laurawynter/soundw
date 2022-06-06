import {BoxA,BoxM,BoxE} from"styled-components"
import {BoxesC, Boxa,Boxm,Boxe}from "./styled-components";

function Box (props){
    return (

        <div className="BoxesC">
            
             <div>Boxa,{props.name}</div>
             <div>Boxm,{props.name}</div>
            <div>Boxe.{props.name}</div>
 <BoxesC/>          
<Boxa/>
<Boxm/>
<Boxe/>

        </div>



    );
}

export default Box