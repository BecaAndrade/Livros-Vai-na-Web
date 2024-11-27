import React from "react";
import S from "./doados.module.scss"
import Biblioteca from "../../assets/img/bibliotedadameianoite.jpg"
import Alice from "../../assets/img/Alicenopaisdasmaravilhas.jpg"
import Coraline from "../../assets/img/Coraline.jpg"
import HarryPotter from "../../assets/img/HarryPotter.jpg"
import Clarice from "../../assets/img/UmSoprodeVida.jpg"
import Hamlet from "../../assets/img/Hamlet.jpg"
import Dostoievski from "../../assets/img/MemoriasdoSubsolo.jpg"
import Essencialismo from "../../assets/img/essencialismo.jpg"

export default function Doados(){
    return(
        <>
        <section className={S.Text}>     
           <h1>Livros Doados</h1>
        </section>
        <section className={S.boxLivros}>
            <div>
                <img className={S.img} src={Biblioteca} alt="Livro Biblioteca da Meia Noite " />
                <h3> Biblioteca da Meia Noite </h3>
                <h4>Matt Haig</h4>
                <p>Ficção Científica</p>
            </div>
            <div>
                <img className={S.livroAlice} src={Alice} alt=" Livro Alice no Pais das Maravilhas" />
                <h3> Alice no Pais das Maravilhas </h3>
                <h4>Lewis Carroll</h4>
                <p>Literatura e Ficção para Adolescentes</p>
            </div>
            <div>
                <img className={S.img} src={Coraline} alt="Livro Coraline" />
                <h3> Coraline</h3>
                <h4> Neil Gaiman</h4>
                <p>Ficção Científica</p>
            </div>                 
            <div>
                <img className={S.img} src={HarryPotter} alt="Livro saga Harry Potter" />
                <h3>Harry Potter - E a Câmara Secreta</h3>
                <h4>J.K. Rowling</h4>
                <p> Literatura e Ficção</p>
            </div>
            </section>
            <section className={S.boxLivros}>
            <div>
                <img className={S.livroClarice}src={Clarice} alt="Livro Um sopro de Vida" />
                <h3>Um Sopro de Vida</h3>
                <h4>Clarice Lispector</h4>
                <p>Ficção Psicológicos</p>
            </div>
            <div>
                <img className={S.img} src={Hamlet} alt="Livro Hamlet" />
                <h3> Hamlet </h3>
                <h4> William Shakespeare </h4>
                <p>Literatura e Ficção</p>
            </div>
            <div>
                <img className={S.img} src={Dostoievski} alt="Livros Memorias do Subsolo" />
                <h3> Memorias do Subsolo </h3>
                <h4> Fiódor Dostoiévski </h4>
                <p> Ficção Literária</p>
            </div>
            <div>
                <img className={S.img} src={Essencialismo} alt="Livros Essencialismo" />
                <h3> Essencialismo </h3>
                <h4> Greg Mckeown </h4>
                <p> Ficção Literária</p>
            </div>

        </section>


        </>
    )
}