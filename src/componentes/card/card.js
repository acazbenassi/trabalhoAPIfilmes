import "./card.css";
import  fundo from "../../images/fundo.png"
function Card({nome,episodes,air_date,}) {
return (
<div className = "card-content">
   



 <div className ="innerCard"> <ul>
 <img src ={fundo} alt="" title=""></img>
   <li>Nome: {nome} </li>
   <li>Episodes: {episodes} </li>  
   <li>Air date: {air_date} </li> 
  
   </ul> 
   
 </div>


</div>
)}  
export default Card;
