import React from 'react'

import { CardListElement } from './CardListElement/CardListElement';
import { ImageWithButton } from './ImageWithButton';

import { getItemCategories } from '../data/api';



export const ProductList = () => {
    const products = getItemCategories();
    const className = "cardList";
    const title = "Produkty";

    const cardListDisplay = products.map((product) => {
        return (
            <ImageWithButton
                category = "produkty"
                productType={product.name}
                className={`${className}__card`}
                key={product.name}
                imageSrc={product.img}
                buttonText={product.name} />
            )
    });

    return (
        <CardListElement className={className} title={title} category = {title}>
            {cardListDisplay}
        </CardListElement>
    )
}


