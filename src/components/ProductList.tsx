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
    
    const [userData, setUserData] = useState({});

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
    const endpoint = "http://localhost:5000/getData"

    const fetchData = () => {
    return fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result =>  setUserData(result))
        .catch(error => console.log('error', error));
}
    useEffect(() => {
        const data = fetchData(); 
    }, []);
    const data = userData.toString()
    const dataArr = JSON.parse(data)
    console.log(dataArr)

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


