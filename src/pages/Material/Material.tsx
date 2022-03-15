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
    

export const Material= () => {
    
    let params = useParams();
    const materialId = params.materialId;
    
    const className = "material";
    const [isLoading, isError, data] = useFetch(
            materialId
              ? `http://mighty-beyond-31038.herokuapp.com/api/fabrics/${materialId}`
              : null,
      )

    const product = data ? data[0] : "brak danych";
      
        if (isLoading) {
            return <PageLoading />
        }
        if (isError) {
            return <PageError />
        }  

    return (
        <section id = "material" >
            <Header
                imageSrc={backgroundHeader}
            />
            <article className={className}>
            <nav className={`${className}__nav`}><Breadcrumbs product={product.name} category={product.category} id={product.id}/>
            </nav>
                <Slider
                    className={className}
                    imageName={`${product.category}_${product.id}`}
                    fileType = "jpg"
                />
                < ProductDescription
                    id = {product.id}
                    className={className}
                    productName={product.name}
                    subname={product.grammage}
                    category={product.category}
                    size={product.grammage}
                    fabrics={product.recommended}
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