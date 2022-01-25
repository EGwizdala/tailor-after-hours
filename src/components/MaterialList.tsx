import React from 'react'

import { CardList } from './CardList/CardList';
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
        <CardList className={className} title={title} >
            {cardListDisplay}
        </CardList>
    )
}

