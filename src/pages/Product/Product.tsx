import React from 'react';
import { useParams } from "react-router-dom";

import { Header } from '../../components/Header/Header';
import { Slider } from '../../components/Slider/Slider';
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';
import backgroundHeader  from "../../images/back-view-of-female-tailor-with-patterns-in-hands.jpg";
import backgroundArticle from "../../images/high-angle-of-seamstress-using-sewing-machine.jpg";

import './index.scss';



export const Product= () => {
    
    let params = useParams();

    console.log(params.productName)
    
    const className = "product";
    const product = 
        {
            productName: params.productName,
            id: "xs-sss-xxx-ddd",
            category: "spodnie",
            size: "M, S, L, XL",
            materials: "wyłącznie z domieszką strechu",
        }
    
   

    return (
        <section id = "product" >
            <Header
                imageSrc={backgroundHeader}
            />
            <article className={className}>
                <Slider
                    className={className}
                    backgroundArticle={backgroundArticle}
                />
                < ProductDescription
                    className={className}
                    productName={product.productName}
                    id={product.id}
                    category={product.category}
                    size={product.size}
                    materials={product.materials}
                />
                
                
                <h2
                    className={`${className}__header--secondary`}>
                    Opis
                </h2>
                <ol className={`${className}__paragraph`}>
                    <li>Jeśli podoba Ci się jakiś produkt prześlij zapytanie korzystając z zakładki kontakt.</li>
                    <li>Wyślij swoje zapytanie o cenę. </li>
                    <li>Skontaktujemy się z Tobą mailowo w celu ustalenia szczegółów zamówienia i podania ostatecznej ceny oraz terminu wysyłki. Ustalenia zostaną zawarte w formularzu zlecenia, który zostanie przesłany do Ciebie pocztą. </li>
                    <li>Po mailowym zaakceptowaniu i dokonaniu przedpłaty, przystąpimy do realizacji zlecenia. W trakcie realizacji zamówienia przesyłamy zdjęcia i ustalamy czy wszystko jest w porządku.</li>
                </ol>
               
            </article>
        </section>
    )
} 