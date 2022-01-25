import React from 'react'

import { Header } from '../components/Header/Header';
import { ProductList } from '../components/ProductList';
import { MaterialList } from '../components/MaterialList';

import backgroundHeader from "../images/top-view-of-seamstress-with-fabric-and-scissors.jpg";

export const Home = () => {


    return (
        <section id = "home">
            <Header imageSrc={backgroundHeader }/>
            <ProductList />
            <MaterialList />
        </section>
    )
} 