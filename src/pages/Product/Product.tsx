import React from 'react';
import { useParams } from "react-router-dom";
import { useFetch } from '../../data/data';

import { Header } from '../../components/Header/Header';
import { Slider } from '../../components/Slider/Slider';
import { ProductDescription } from '../../components/ProductDescription/ProductDescription';
import { PageLoading } from '../../components/PageLoading/PageLoading';
import { PageError } from '../../components/PageError/PageError';
import { Breadcrumbs } from '../../components/Breadcrumbs';


import backgroundHeader  from "../../images/back-view-of-female-tailor-with-patterns-in-hands.jpg";

import "./index.scss";
    

export const Product= () => {
    
    let params = useParams();
    const productId = params.productId;
    
    const className = "product";
    const [productLoading, productError, productData] = useFetch(
            productId
              ? `http://mighty-beyond-31038.herokuapp.com/api/items/${productId}`
              : null,
      )

    const product = productData ? productData[0] : "brak danych";
      
        if (productLoading) {
            return <PageLoading />
        }
        if (productError) {
            return <PageError />
        }  

    return (
        <section id = "product" >
            <Header
                alt = "back-view-of-female-tailor-with-patterns-in-hands"
                imageSrc={backgroundHeader}
            />
            <article className={className}>
            <nav className={`${className}__nav`}><Breadcrumbs mainCategory ="produkty" product={product.name} category={product.category} id={product.id}/>
            </nav>
                <Slider
                    category = "produkty"
                    className={className}
                    imageName={`${product.category}_${product.id}`}
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
            {product.description}
        </p>
            </article>
        </section>
    )
} 