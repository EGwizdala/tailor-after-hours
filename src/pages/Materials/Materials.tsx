import React from 'react';
import { useParams } from "react-router-dom";

import { Header } from '../../components/Header/Header';
import { MaterialList } from '../../components/MaterialList';
import { ButtonLink } from '../../components/Button/ButtonLink';
import { MaterialCategoryList } from '../../components/MaterialCategoryList';


import './index.scss';

import backgroundHeader from "../../images/high-angle-of-seamstress-with-fabrics-and-scissors.jpg";





export const Materials = () => {
    const east = <span className="material-icons-outlined">
        east
    </span>;
    const className = "materials";
    let params = useParams();
    const title = params.materialType;
    

    return (
        <section id = "materials" className = {className}>
            <Header
                imagePosition="center -150px"
                imageSrc={backgroundHeader} />
            <MaterialList title={title} category={title}/>
            <ButtonLink href = "/Kontakt" className={className} icon={east} >Masz pytania? Napisz!</ButtonLink>
            <MaterialCategoryList category={title} title="Pozostałe materiały" />
            <ButtonLink href = "" className={className} icon={east} >Zobacz produkty!</ButtonLink>
            
        </section>
    )
} 