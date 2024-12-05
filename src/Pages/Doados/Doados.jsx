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
                <article>
                <img className={S.img} src={Biblioteca} alt="Livro Biblioteca da Meia Noite " />
                <h3> Biblioteca da Meia Noite </h3>
                <p>Matt Haig</p>
                <p>Ficção Científica</p>
                </article>
            </div>
            <div>
            <article>
                <img className={S.livroAlice} src={Alice} alt=" Livro Alice no Pais das Maravilhas" />
                <h3> Alice no Pais das Maravilhas </h3>
                <p>Lewis Carroll</p>
                <p>Literatura e Ficção para Adolescentes</p>
                </article>
            </div>
            <div>
            <article>
            <img className={S.img} src={Coraline} alt="Livro Coraline" />
                <h3> Coraline</h3>
                <p> Neil Gaiman</p>
                <p>Ficção Científica</p>
            </article>
            </div>                 
            <div>
            <article>
            <img className={S.img} src={HarryPotter} alt="Livro saga Harry Potter" />
                <h3>Harry Potter - E a Câmara Secreta</h3>
                <p>J.K. Rowling</p>
                <p> Literatura e Ficção</p>
            </article>           
            </div>
            </section>
            <section className={S.boxLivros}>
            <div>
            <article>
            <img className={S.livroClarice}src={Clarice} alt="Livro Um sopro de Vida" />
                <h3>Um Sopro de Vida</h3>
                <p>Clarice Lispector</p>
                <p>Ficção Psicológicos</p>
            </article>
            </div>
            <div>
            <article>
            <img className={S.img} src={Hamlet} alt="Livro Hamlet" />
                <h3> Hamlet </h3>
                <p> William Shakespeare </p>
                <p>Literatura e Ficção</p>
            </article>
            </div>
            <div>
            <article>
            <img className={S.img} src={Dostoievski} alt="Livros Memorias do Subsolo" />
                <h3> Memorias do Subsolo </h3>
                <p> Fiódor Dostoiévski </p>
                <p> Ficção Literária</p>
            </article>

            </div>
            <div>
            <article>
            <img className={S.img} src={Essencialismo} alt="Livros Essencialismo" />
                <h3> Essencialismo </h3>
                <p> Greg Mckeown </p>
                <p> Ficção Literária</p>
            </article>
        
            </div>

        </section>


        </>
    )
}