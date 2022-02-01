import React from 'react'

import { CardListElement } from './CardListElement/CardListElement';
import { ImageWithButton } from './ImageWithButton';
import { ReactComponent as Heart } from '../svg/Heart.svg';

interface ProductTypeListProps {
    title: string
    category: string
}

export const ProductTypeList: React.FC<ProductTypeListProps> = ({title, category}) => {
    const imageSrc = <Heart width='50%' height = '50%'/>;
    const alt = "some image"
    const products = ['spodnie', 'sukienki', 'bluzki', 'bluzy', 'torby'];
    const className = "cardList";
  

    const cardListDisplay = products.filter(product => product != category).map((product) => {
        return (
            <ImageWithButton className = {`${className}__card`} key={product} imageSrc={imageSrc} alt={alt} buttonText={product}/>
            )
    });

    return (
        <CardListElement className={className} category={category} title = {title}>
            {cardListDisplay}
        </CardListElement>
    )
}


