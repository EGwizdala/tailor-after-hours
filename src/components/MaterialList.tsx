import React from 'react'

import { CardListElement } from './CardListElement/CardListElement';
import { ImageWithButton } from './ImageWithButton';
import { ReactComponent as Heart } from '../svg/Heart.svg';
import { getMaterialCategories } from '../data/api';

export const MaterialList = () => {
    const imageSrc = 'material.png';
    const materials = ['dostępne', 'chcesz swoje?'];
    const className = "cardList";
    const title = "Materiały";

    const cardListDisplay = materials.map((material) => {
        return (
            <ImageWithButton productType= {material} className = {`${className}__card`} key={material} imageSrc={imageSrc} buttonText={material}/>
            )
    });

    return (
        <CardListElement className={className} category={title} title={title} >
            {cardListDisplay}
        </CardListElement>
    )
}

