import React from 'react';
import { Outlet} from "react-router-dom";

import { CardListElement } from './CardListElement/CardListElement';
import { ImageWithButton } from './ImageWithButton';
import { getItemCategories } from '../data/api';



interface ProductTypeListProps {
    title: string  | any
    category: string | any
}

export const ProductTypeList: React.FC<ProductTypeListProps> = ({ title, category}) => {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

   
    const className = "cardList";
    const products = getItemCategories();

    const cardListDisplay = products.filter(product => product.name != category).map((product) => {
        return (
            <ImageWithButton
                    productType= {product.name}
                    className={`${className}__card`}
                    key={product.name}
                    imageSrc={product.img}
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