import React from 'react'

import { Header } from '../components/Header/Header';
import { ProductTypeList } from '../components/ProductTypeList';

import backgroundHeader from "../images/top-view-of-seamstress-with-fabric-and-scissors.jpg";

export const ProductsHome = () => {


    return (
        <section id = "home">
            <Header imageSrc={backgroundHeader }/>
            <ProductTypeList category = "produkty" title= "produkty"/>
        </section>
    )
} 