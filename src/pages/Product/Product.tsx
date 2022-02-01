import React from 'react';

import { Header } from '../../components/Header/Header';
import { ButtonLink } from '../../components/Button/ButtonLink';
import { Slider } from '../../components/Slider/Slider';

import backgroundHeader  from "../../images/back-view-of-female-tailor-with-patterns-in-hands.jpg";
import backgroundArticle from "../../images/high-angle-of-seamstress-using-sewing-machine.jpg";

import './Product.scss';


export const Product = () => {
    const east = <span className="material-icons-outlined">
        east
    </span>;

    const className = "product";

   

    return (
        <section id = "product" >
            <Header
                imageSrc={backgroundHeader}
            />
            <article className={className}>
                <Slider className={className} backgroundArticle={ backgroundArticle}/>
                
                <nav>Home/Porduct/Produkty</nav>
                <h1 className={`${className}__header`}>O mnie</h1>
                <div className={`${className}__subtitle`}>Szycie to moja pasja! </div>
                <div className={`${className}__subtitle`} >Kategoria</div>
                <div className={`${className}__subtitle`}>Rozmiar</div>
                <div className={`${className}__subtitle`}>Polecane materiały:</div>
                <div className={`${className}__subtitle--lowercase`}>Wyłącznie z domieszką streczu</div>
                <ButtonLink className={className} href="#contact" icon={east}>Masz pytania? Napisz</ButtonLink>
                
                <h2 className={`${className}__header--secondary`}>Opis</h2>
                <ol>
                    <li>Jeśli podoba Ci się jakiś produkt prześlij zapytanie korzystając z zakładki kontakt.</li>
                    <li>Wyślij swoje zapytanie o cenę. </li>
                    <li>Skontaktujemy się z Tobą mailowo w celu ustalenia szczegółów zamówienia i podania ostatecznej ceny oraz terminu wysyłki. Ustalenia zostaną zawarte w formularzu zlecenia, który zostanie przesłany do Ciebie pocztą. </li>
                    <li>Po mailowym zaakceptowaniu i dokonaniu przedpłaty, przystąpimy do realizacji zlecenia. W trakcie realizacji zamówienia przesyłamy zdjęcia i ustalamy czy wszystko jest w porządku.</li>
                </ol>
               
            </article>
        </section>
    )
} 