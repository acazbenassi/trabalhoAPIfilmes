import React, { useEffect, useState } from "react";
import Card from "../card/card";
function Home() {
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

        <div className="card">
            {pegaNaves.map(nave => {
                return <Card key={nave.id} 
                nome ={nave.name} 
                classe ={nave.model} 
                tripulantes ={nave.crew} 
                fabricante ={nave.manufacturer}
                filmes ={nave.films}/>
            })}



        </div>
    );
}
export default Home;