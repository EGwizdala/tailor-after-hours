import React from 'react';
import { useParams } from "react-router-dom";
import { useFetch } from '../../data/data';

import { Header } from '../../components/Header/Header';
import { Slider } from '../../components/Slider/Slider';
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';
import backgroundHeader  from "../../images/back-view-of-female-tailor-with-patterns-in-hands.jpg";

import "./index.scss";
    

export const Product= () => {
    
    let params = useParams();
    const productId = params.productId;

    console.log(params.productId)
    
    const className = "product";
    // const product = 
    //     {
    //         productName: params.productId,
    //         id: "xs-sss-xxx-ddd",
    //         category: "spodnie",
    //         size: "M, S, L, XL",
    //         materials: "wyłącznie z domieszką strechu",
    //         description: "Cygaretkowy fason tych spodni optycznie wysmukla nogi, a długość do kostek sprawia, że spodnie pasują zarówno do sandałów jak i do botków"
    //     }
    
        const [productLoading, productError, productData] = useFetch(
            productId
              ? `https://mighty-beyond-31038.herokuapp.com/api/items/${productId}`
              : null,
      )
    console.log(productData ? productData[0].description : "brak danych");

    const product = productData ? productData[0] : "brak danych";
      
        if (productLoading) {
          console.log('loading...') 
        }
        if (productError) {
          console.log('error...') 
        }  

    return (
        <section id = "product" >
            <Header
                imageSrc={backgroundHeader}
            />
            <article className={className}>
                <Slider
                    className={className}
                    imageName={`${product.category}_${product.id}_1`}
                    fileType = "jpg"
                />
                < ProductDescription
                    id = {product.id}
                    className={className}
                    productName={product.name}
                    subname={product.subname}
                    category={product.category}
                    size={product.size}
                    fabrics={product.fabrics}
                />
                 <h2
            className={`${className}__header--secondary`}>
            Opis:
        </h2>
        <p className={`${className}__paragraph`}>
            {product.discription}
        </p>
            </article>
        </section>
    )
} 