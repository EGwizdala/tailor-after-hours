import React, {useState, useEffect} from 'react';
import { Outlet} from "react-router-dom";

import { CardListElement } from './CardListElement/CardListElement';
import { ImageWithButton } from './ImageWithButton';

import { getCategories } from '../data/data';



interface ProductCategoryListProps {
    title: string  | any
    category: string | any
}

export const ProductCategoryList: React.FC<ProductCategoryListProps> = ({ title, category}) => {
    const [categories, setCategories] = useState<any[]>([]);
   
    const className = "cardList";
    const scrollTop = function() {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const categoriesdata = getCategories();

        const printCategories = async () => {
            const list = await categoriesdata;
            setCategories(list);
          };
          printCategories();
 
    }, [])


    const cardListDisplay = categories.filter(product => product.name != category).map((product) => {
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
        <CardListElement className={className} category={category} title={title}>
            
            {cardListDisplay}
            <Outlet/>
        </CardListElement>
        
    )
}


//Koniecznie opisz problem z corsami, jaki z ciebie zajebisty hakier!!! :D