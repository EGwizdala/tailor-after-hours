import React from 'react';
import { Link, Outlet, Routes, useParams } from "react-router-dom";

import { CardListElement } from './CardListElement/CardListElement';
import { Card } from './Card/Card';
import { getProductCategories } from '../data/api';

interface ProductListProps {
    title: string | any
    category: string  | any
}

export const ProductList: React.FC<ProductListProps> = ({title, category}) => {
 const products: any = getProductCategories(title)

   const productTypes = products.types
    const className = "cardList";
    let params = useParams();
    const productType = params.productType;
    console.log(productType)

    const cardListDisplay = productTypes.map((product: any) => {
        return (
           <Card
                productType={productType}
                productName = {product.name}
                key={product.name}
                imageName={product.imageName}
                fileType={product.imageType}
                buttonText={product.name}
                subtitle={product.id}
                />
        
            )
    });

    return (
        <CardListElement
            className={className}
            title={title}
            category={category}
        >
            {cardListDisplay}
            <Outlet />
        </CardListElement>
    )
}


