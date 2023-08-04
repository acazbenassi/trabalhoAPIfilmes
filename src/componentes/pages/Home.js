import React, { useEffect, useState } from "react";
import Card from "../card/card";
function Home() {
    const [pegaNaves, setPegaNaves] = useState([]);

    async function fetchNaves() {
        const resposta = await fetch("https://rickandmortyapi.com/api/episode", {
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
                episodes = {nave.episode} 
                air_date={nave.air_date}
                
                />
            })}



        </div>
    );
}
export default Home;