import React from 'react'

import { CardList } from './CardList/CardList';
import { ImageWithButton } from './ImageWithButton';
import { ReactComponent as Heart } from '../svg/Heart.svg';



export const ProductList = () => {
    const imageSrc = <Heart width='50%' height = '50%'/>;
    const alt = "some image"
    const products = ['spodnie', 'sukienki', 'bluzki', 'bluzy', 'torby'];
    const className = "cardList";
    const title = "Produkty";

    const cardListDisplay = products.map((product) => {
        return (
            <ImageWithButton className = {`${className}__card`} key={product} imageSrc={imageSrc} alt={alt} buttonText={product}/>
            )
    });

    return (
        <CardList className={className} title={title} >
            {cardListDisplay}
        </CardList>
    )
}


