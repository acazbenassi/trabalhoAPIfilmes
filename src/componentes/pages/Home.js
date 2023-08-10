import React, { useEffect, useState } from "react";
import Card from "../card/card";
import "./home.css"

function Home() {
    const [personagens, setPersonagens] = useState([]);
    const [personagensFiltrados, setPersonagensFiltrados] = useState([]);
    const [busca, setBusca] = useState("");

    async function fetchPersonagens() {
        const resposta = await fetch("https://rickandmortyapi.com/api/episode", {
            method: "GET",
        });
        const dadosJson = await resposta.json();
        const listaPersonagens = dadosJson.results         
        setPersonagens(listaPersonagens)
        setPersonagensFiltrados(listaPersonagens)

    }
    useEffect(() => {
        fetchPersonagens();
    }, [])

    

    function pesquisar(texto){
        setBusca(texto)
        const lowerBusca = texto.toLowerCase();        
        const personagensFiltrados = personagens.filter( (personagem) => personagem.name.toLowerCase().includes(lowerBusca) );        
        setPersonagensFiltrados(personagensFiltrados)
       
        
    }
  

    return (
        <>
            <div className="divPesquisar">               
                <input className="inputPesquisar" placeholder="Pesquisar episodio" value={busca} onChange={(e) => pesquisar(e.target.value)} />
            </div>
           
            <div className="card">                
                {personagensFiltrados.map(personagem => {
                    return <Card key={personagem.id} 
                    nome ={personagem.name} 
                    episodes = {personagem.episode} 
                    air_date={personagem.air_date}
                    
                    />
                })}
            </div>
        </>
    );
}
export default Home;