import "./card.css";
import  fundo from "../../componentes/images/fundo.png"
function Card({nome,episodes,air_date,}) {
return (
<div className = "card-content">
<img src ={fundo} alt="" title=""></img>  



 <div className ="innerCard"> <ul>

   <li>Nome: {nome} </li>
   <li>Episodes: {episodes} </li>  
   <li>Air date: {air_date} </li> 
  
   </ul> 
   
 </div>


</div>
)}  
export default Card;
