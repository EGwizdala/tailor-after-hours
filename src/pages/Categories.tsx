import React from 'react'

import { Header } from '../components/Header/Header';
import { ProductCategoryList } from '../components/ProductCategoryList';

import backgroundHeader from "../images/top-view-of-seamstress-with-fabric-and-scissors.jpg";

export const Categories = () => {


    return (
        <section id = "home">
            <Header imageSrc={backgroundHeader }/>
            <ProductCategoryList category = "produkty" title= "produkty"/>
        </section>
    )
} 