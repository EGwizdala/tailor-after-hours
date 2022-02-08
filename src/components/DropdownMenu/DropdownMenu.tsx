import React from 'react';
import { Link } from 'react-router-dom';
import { getItemCategories } from '../../data/api';
import './index.scss'

interface DropdownMenuProps {
    
}

export const DropdownMenu: React.FC<DropdownMenuProps> = () => {
    const className = "dropdown-menu"
    
    const products = getItemCategories();

    const product = products.map((product) =><Link className={`${className}__button`} to ={`/produkty/${product.name}`} >{ product.name }</Link>)
    
    return (
        <>
        <div className={`${className}`}>
            {product}
               
            {/* <a className={`${className}--menu__button`} href="#products">Produkty {<GoogleIcon className={className} icon={icon}/>}</a>
            <a className={`${className}--menu__button`} href="#materials">Materiały {<GoogleIcon className={className} icon={icon}/>}</a>
            <a className={`${className}--menu__button`} href="#howToBuy">Jak kupować</a>
            <a className={`${className}--menu__button`} href="#contact">Kontakt</a> */}
        </div>
        </>
    )
}

