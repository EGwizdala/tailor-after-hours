import React, {useState, useEffect} from 'react';
import { Outlet} from "react-router-dom";

import { CardListElement } from './CardListElement/CardListElement';
import { ImageWithButton } from './ImageWithButton';
import { getItemCategories } from '../data/api';

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


interface ProductTypeListProps {
    title: string  | any
    category: string | any
}

export const ProductTypeList: React.FC<ProductTypeListProps> = ({ title, category}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState<any[]>([]);

   
    const className = "cardList";

    const scrollTop = function() {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        fetch("http://localhost:5000/getData", requestOptions)
        .then(response => response.json())
        .then(result => {
            setIsLoaded(true);
            setProducts(result);
          },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, [])

    console.log(category)
    const cardListDisplay = products.filter(product => product.name != category).map((product) => {
        return (
            <ImageWithButton
                    onClick = {scrollTop}
                    productType= {product.name}
                    className={`${className}__card`}
                    key={product.name}
                    imageSrc={`${product.name}.svg`}
                    buttonText={product.name} />
            )
    });

    return (
        <CardListElement className={className} category={category} title = {title}>
            {cardListDisplay}
            <Outlet/>
        </CardListElement>
        
    )
}


//Koniecznie opisz problem z corsami, jaki z ciebie zajebisty hakier!!! :D