import React from 'react'

import { CardListElement } from './CardListElement/CardListElement';
import { Card } from './Card/Card';


interface ProductListProps {
    title: string
    category: string
}

export const ProductList: React.FC<ProductListProps> = ({title, category}) => {
    const products = [
        {
            productName: 'Nazwa Produktu',
            category: "Nazwa Kategorii",
            imageName: "sweater",
            imageType: "jpg",
        },
        {
            productName: 'Nazwa Produktu',
            category: "Nazwa Kategorii",
            imageName: "sweater",
            imageType: "jpg",
        },
        {
            productName: 'Nazwa Produktu',
            category: "Nazwa Kategorii",
            imageName: "sweater",
            imageType: "jpg",
        },
        {
            productName: 'Nazwa Produktu',
            category: "Nazwa Kategorii",
            imageName: "sweater",
            imageType: "jpg",
        },
        {
            productName: 'Nazwa Produktu',
            category: "Nazwa Kategorii",
            imageName: "sweater",
            imageType: "jpg",
        },
        {
            productName: 'Nazwa Produktu',
            category: "Nazwa Kategorii",
            imageName: "sweater",
            imageType: "jpg",
        },
        {
            productName: 'Nazwa Produktu',
            category: "Nazwa Kategorii",
            imageName: "sweater",
            imageType: "jpg",
        },
        {
            productName: 'Nazwa Produktu',
            category: "Nazwa Kategorii",
            imageName: "sweater",
            imageType: "jpg",
        },];
    const className = "cardList";

    const cardListDisplay = products.map((product) => {
        return (
            <Card key={product.productName} imageName={product.imageName} fileType = {product.imageType} buttonText={product.productName} subtitle={product.category}/>
            )
    });

    return (
        <CardListElement className={className} title={title} category = {category}>
            {cardListDisplay}
        </CardListElement>
    )
}


