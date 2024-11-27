import React from "react";
import S from "./querodoar.module.scss"
import Livro from "../../assets/img/Book.png"

export default function QueroDoar(){
    return(
        <section className={S.Principal}>
            <section className={S.Container}>
        <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
        <form action="">
        <div>
            <img src={Livro} alt="Icone de um Livro" />
            <h3>Informações do Livro</h3>
        </div>
        <input type="text" placeholder="Titulo"/>
        <input type="text" placeholder="Categoria"/>
        <input type="text" placeholder="Autor"/>
        <input type="text" placeholder="Link da Imagem"/>
        <input type="submit" value="Doar"/>
        </form>
        </section>
        </section>
    )
}