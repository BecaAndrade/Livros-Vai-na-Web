import React from "react";
import S from "./doados.module.scss"
// import Biblioteca from "../../assets/img/bibliotedadameianoite.jpg"
// import Alice from "../../assets/img/Alicenopaisdasmaravilhas.jpg"
// import Coraline from "../../assets/img/Coraline.jpg"
// import HarryPotter from "../../assets/img/HarryPotter.jpg"
// import Clarice from "../../assets/img/UmSoprodeVida.jpg"
// import Hamlet from "../../assets/img/Hamlet.jpg"
// import Dostoievski from "../../assets/img/MemoriasdoSubsolo.jpg"
// import Essencialismo from "../../assets/img/essencialismo.jpg"
import axios from 'axios';
import {useState, useEffect} from 'react'

export default function Doados(){

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        const response = await axios.get("https://api-livros-ll30.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect(()=>{
        getLivros();
    },[])
    

    return(
        <>
        <section className={S.Text}>     
           <h1>Livros Doados</h1>
        </section>
        <section className={S.boxLivros}>
            <div>
                {/* <article>
                <img src={Biblioteca} alt="Livro Biblioteca da Meia Noite " />
                <h3> Biblioteca da Meia Noite </h3>
                <p>Matt Haig</p>
                <p>Ficção Científica</p>
                </article> */}
                {livros.map((item)=>(
                <article>
                 <img src={item.imagem_url} alt="" />
                 <h3>{item.titulo}</h3>
                  <p>{item.categoria}</p>
                  <p>{item.autor}</p>
                 </article>
                ))}
            </div>        
            </section>


        </>
    )
}