import React from 'react'

import { Header } from '../../components/Header/Header';
import { ProductList } from '../../components/ProductList';
import { ButtonLink } from '../../components/Button/ButtonLink';
import { ProductTypeList } from '../../components/ProductTypeList';

import './Products.scss';

import backgroundHeader from "../../images/top-view-of-seamstress-with-fabric-and-scissors.jpg";

export const Products = () => {
    const east = <span className="material-icons-outlined">
        east
    </span>;
    const className = "products";
    const title = "spodnie"

    return (
        <section id = "products">
            <Header imageSrc={backgroundHeader }/>
            <ProductList title={title} category={title}/>
            <ButtonLink className={className} icon={east} href={""}>Zobacz materiały!</ButtonLink>
            <ProductTypeList category={title} title= "Pozostałe produkty"/>
        </section>
    )
} 