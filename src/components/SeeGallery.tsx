import React from 'react'

import { CardListElement } from './CardListElement/CardListElement';
import { ImageWithButton } from './ImageWithButton';

interface SeeGalleryProps {
    className: string
}

export const SeeGallery: React.FC<SeeGalleryProps> = ({className}) => {
    const listElements = ['produkty', 'materiały'];
    const title = "zobacz galerię";
    const cardClassName = "cardList"
    const cardListDisplay = listElements.map((element) => {
           
        return (
            <ImageWithButton category={element === "materiały" ? 'materialy' : element} className = {`${cardClassName}__card`} key={element} imageSrc={`${element}.svg`} productType= {element} buttonText={element}/>
            )
    });

    return (
        <CardListElement className={`${cardClassName} ${className}`} category={title} title={title} >
            {cardListDisplay}
        </CardListElement>
    )
}

