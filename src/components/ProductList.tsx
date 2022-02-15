import {useEffect, useState} from "react";
import { Link, Outlet, Routes, useHref, useParams } from "react-router-dom";

import { CardListElement } from './CardListElement/CardListElement';
import { Card } from './Card/Card';
import { getProductCategories } from '../data/api';


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

interface requestOptions {
    method: any
    headers: any
    redirect: any
  }

var requestOptions:requestOptions= {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


interface ProductListProps {
    title: string | any
    category: string  | any
}


export const ProductList: React.FC<ProductListProps> = ({ title, category }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const products: any = getProductCategories(title)

   const productTypes = products.types
    const className = "cardList";
    let params = useParams();
    const productType = params.productType;

    useEffect(() => {
        fetch("http://localhost:5000/getData", requestOptions)
        .then(response => response.json())
        .then(result => {
            setIsLoaded(true);
            setItems(result);
          },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, [])

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


