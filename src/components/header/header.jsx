import React from "react";
import Logo from "../../img/Logologo.png"
import Lupa from "../../img/lupa.png"
import S from "./header.module.scss"

function Header() {
  return (
    <header className={S.Box}>
        <div>
        <img src={Logo} alt="" />
        <h2>Livros Vai na Web</h2>
        </div>

        <nav className={S.Navegacao}>
            <ul>
            <li>Início</li>
            <li>Livros Doados</li>
            <li>Quero Doar</li>
            </ul>
        </nav>
        <form className={S.Pesquisa}>
        <input 
          type="text" 
          placeholder="O que você procura?" 
        />
         <img src={Lupa} alt="" />
        </form>
    </header>
  );
}

export default Header;
