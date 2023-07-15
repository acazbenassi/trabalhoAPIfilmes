import React, { useEffect, useState } from "react";
import "./card.css";

function Card() {
  const [pegaNaves, setPegaNaves] = useState([]);

  async function fetchNaves() {
    const resposta = await fetch("https://swapi.dev/api/starships/", {
      method: "GET",
    });
    const arquivo = await resposta.json();
    const arquivoNave = arquivo.results
    setPegaNaves(arquivoNave)

  }
  useEffect(() => {
    fetchNaves();
  }, [])

  return (
    
    <div className = "card">
   


      {pegaNaves.map((nave) => (
        <div className ="innerCard" key = {nave.name}><ul>
          <li>Nome {nave.name}</li> <br></br>
          <li>Classe {nave.starship_class}</li><br></br>
          <li>Tripulantes {nave.crew}</li><br></br>
          <li>Fabricante {nave.manufacturer}</li><br></br>
          
          </ul>
        </div>

      ))}
   </div>
  );
}
export default Card;
