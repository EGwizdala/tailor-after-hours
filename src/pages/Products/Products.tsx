import React from 'react';
import { useParams } from "react-router-dom";

import { Header } from '../../components/Header/Header';
import { ProductList } from '../../components/ProductList';
import { ButtonLink } from '../../components/Button/ButtonLink';
import { ProductCategoryList } from '../../components/ProductCategoryList';


import './index.scss';

import backgroundHeader from "../../images/top-view-of-seamstress-with-fabric-and-scissors.jpg";



export const Products = () => {
    const east = <span className="material-icons-outlined">
        east
    </span>;
    const className = "products";
    let params = useParams();
    const title = params.productType;
    

    return (
        <section id = "products">
            <Header imageSrc={backgroundHeader }/>
            <ProductList title={title} category={title}/>
            <ButtonLink className={className} icon={east} >Zobacz materiały!</ButtonLink>
            <ProductCategoryList category={title} title="Pozostałe produkty" />
            
        </section>
    )
} 