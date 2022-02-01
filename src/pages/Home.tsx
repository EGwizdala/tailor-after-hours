import React from 'react'

import { Header } from '../components/Header/Header';
import { ProductTypeList } from '../components/ProductTypeList';
import { MaterialList } from '../components/MaterialList';

import backgroundHeader from "../images/top-view-of-seamstress-with-fabric-and-scissors.jpg";

export const Home = () => {


    return (
        <section id = "home">
            <Header imageSrc={backgroundHeader }/>
            <ProductTypeList category = "produkty" title= "produkty"/>
            <MaterialList />
        </section>
    )
} 