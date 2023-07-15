import React, { useEffect, useState } from "react";
import "./card.css";

function Card({nome,classe,tripulantes,fabricante,filmes}) {
return (
<div className = "card">
   



 <div className ="innerCard"> <ul>
   <li>Nome: {nome} </li> 
   <li>Classe: {classe} </li>
   <li>Tripulantes: {tripulantes} </li>
   <li>Fabricante: {fabricante} </li>
   
   </ul>
 </div>


</div>
)}  
export default Card;
