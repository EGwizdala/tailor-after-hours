import React from 'react';
import { useParams } from "react-router-dom";

import { Header } from '../../components/Header/Header';
import { Slider } from '../../components/Slider/Slider';
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';
import backgroundHeader  from "../../images/back-view-of-female-tailor-with-patterns-in-hands.jpg";
import backgroundArticle from "../../images/high-angle-of-seamstress-using-sewing-machine.jpg";

import "./index.scss";
    

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
            description: "Cygaretkowy fason tych spodni optycznie wysmukla nogi, a długość do kostek sprawia, że spodnie pasują zarówno do sandałów jak i do botków"
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
                    description = {product.description}
                    className={className}
                    productName={product.productName}
                    id={product.id}
                    category={product.category}
                    size={product.size}
                    materials={product.materials}
                />
                 <h2
            className={`${className}__header--secondary`}>
            Opis:
        </h2>
        <p className={`${className}__paragraph`}>
            {product.description}
        </p>
            </article>
        </section>
    )
} 