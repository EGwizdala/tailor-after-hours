import React from 'react';
import { useParams } from "react-router-dom";

import { Header } from '../../components/Header/Header';
import { ProductList } from '../../components/ProductList';
import { ButtonLink } from '../../components/Button/ButtonLink';
import { ProductCategoryList } from '../../components/ProductCategoryList';


import './index.scss';

import backgroundHeader from "../../images/high-angle-of-seamstress-with-fabrics-and-scissors.jpg";





export const Products = () => {
    const east = <span className="material-icons-outlined">
        east
    </span>;
    const className = "products";
    let params = useParams();
    const title = params.productType;
    

    return (
        <section id = "products" className = {className}>
            <Header
                alt = "high-angle-of-seamstress-with-fabrics-and-scissors"
                imagePosition="center -150px"
                imageSrc={backgroundHeader} />
            <ProductList title={title} category={title}/>
            <ButtonLink href = "/Kontakt" className={className} icon={east} >Masz pytania? Napisz!</ButtonLink>
            <ProductCategoryList category={title} title="Pozostałe produkty" />
            <ButtonLink href = "/materialy" className={className} icon={east} >Zobacz materiały!</ButtonLink>
            
        </section>
    )
} 