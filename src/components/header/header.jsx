import React from "react";
//mportando estilo da header
import S from "./header.module.scss"
//importando as img
import Logo from "../../assets/img/Logologo.png"
import Lupa from "../../assets/img/lupa.png"
//importando as rotas
import Inicio from "../../Pages/Inicio/Inicio"
import Doados from "../../Pages/Doados/Doados"
import QueroDoar from "../../Pages/Quero Doar/QueroDoar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Header() {
  return (
    <BrowserRouter>
    <header>
        <section>
        <img src={Logo} alt="" />
        <h2>Livros Vai na Web</h2>
        </section>

        <nav >
            <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="Doados">Livros Doados</Link></li>
            <li><Link to="QueroDoar">Quero Doar</Link></li>
            </ul>
        </nav>
        <div>
          <input type="text" />
        <img src={Lupa} alt="" />
        </div> 
    </header>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/Doados" element={<Doados/>}/>
      <Route path="/QueroDoar" element={<QueroDoar/>}/>
    </Routes>
    </BrowserRouter>
  );
  

}

export default Header;
