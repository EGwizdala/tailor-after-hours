import React from 'react'

import { Header } from '../components/Header/Header';
import { ProductCategoryList } from '../components/ProductCategoryList';
import { MaterialList } from '../components/MaterialList';

import backgroundHeader from "../images/top-view-accessories.jpg";

export const Home = () => {


    return (
        <section id = "home">
            <Header  imageSrc={backgroundHeader }/>
            <ProductCategoryList category = "produkty" title= "produkty"/>
            <MaterialList />
        </section>
    )
} 