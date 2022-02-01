import React from 'react'

import { CardListElement } from './CardListElement/CardListElement';
import { ImageWithButton } from './ImageWithButton';
import { ReactComponent as Heart } from '../svg/Heart.svg';

interface SeeGalleryProps {
    className: string
}

export const SeeGallery: React.FC<SeeGalleryProps> = ({className}) => {
    const imageSrc = <Heart width='50%' height = '50%'/>;
    const alt = "some image";
    const listElements = ['produkty', 'materiały'];
    const title = "zobacz galerię";
    const cardClassName = "cardList"
    const cardListDisplay = listElements.map((element) => {
        return (
            <ImageWithButton className = {`${cardClassName}__card`} key={element} imageSrc={imageSrc} alt={alt} buttonText={element}/>
            )
    });

    return (
        <CardListElement className={`${cardClassName} ${className}`} category={title} title={title} >
            {cardListDisplay}
        </CardListElement>
    )
}

