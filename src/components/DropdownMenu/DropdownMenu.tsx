import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

interface DropdownMenuProps {
    classAnimation: string
    categoriesList: any
    categoryType: string

}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ classAnimation, categoriesList, categoryType }) => {
    const [categories, setCategories] = useState<any[]>([]);
    
    const className = "dropdown-menu";
    
 

    const category = categoriesList.map((category) => <Link key = {category.name || category.type} className={`${className}__button`} to={`/${categoryType}/${category.name || category.type}`} >{category.name || category.type}</Link>);
    return (
        <>
            <div className={`${className} ${classAnimation}`}>
            {category}
            {/* <a className={`${className}--menu__button`} href="#products">Produkty {<GoogleIcon className={className} icon={icon}/>}</a>
            <a className={`${className}--menu__button`} href="#materials">Materiały {<GoogleIcon className={className} icon={icon}/>}</a>
            <a className={`${className}--menu__button`} href="#howToBuy">Jak kupować</a>
            <a className={`${className}--menu__button`} href="#contact">Kontakt</a> */}
        </div>
        </>
    )
}

