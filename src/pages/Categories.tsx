import React from 'react'

import { Header } from '../components/Header/Header';
import { ProductCategoryList } from '../components/ProductCategoryList';

import backgroundHeader from "../images/high-angle-of-seamstress-with-fabrics-and-scissors.jpg";

export const Categories = () => {


    return (
        <section id = "home">
            <Header
                imagePosition="center 80%"
                imageSrc={backgroundHeader} />
            <ProductCategoryList category = "produkty" title= "produkty"/>
        </section>
    )
} 