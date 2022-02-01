import React from 'react'

import { CardListElement } from './CardListElement/CardListElement';
import { ImageWithButton } from './ImageWithButton';
import { ReactComponent as Heart } from '../svg/Heart.svg';

export const MaterialList = () => {
    const imageSrc = <Heart width='50%' height = '50%'/>;
    const alt = "some image";
    const materials = ['dostępne', 'chcesz swoje?'];
    const className = "cardList";
    const title = "Materiały";

    const cardListDisplay = materials.map((material) => {
        return (
            <ImageWithButton className = {`${className}__card`} key={material} imageSrc={imageSrc} alt={alt} buttonText={material}/>
            )
    });

    return (
        <CardListElement className={className} category={title} title={title} >
            {cardListDisplay}
        </CardListElement>
    )
}

