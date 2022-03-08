import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getItemCategories } from '../../data/api';
import { getCategories } from '../../data/data';
import './index.scss'

interface DropdownMenuProps {
    style?: any
    classAnimation: string
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ style, classAnimation }) => {
    const [categories, setCategories] = useState<any[]>([]);
    
    const className = "dropdown-menu";
    
    const products = getItemCategories();

    

    useEffect(() => {
        const categoriesdata = getCategories();

        const printCategories = async () => {
            const list = await categoriesdata;
            setCategories(list);
          };
          printCategories();
 
    }, [])
    const category = categories.map((category) => <Link key = {category.name} className={`${className}__button`} to={`/produkty/${category.name}`} >{category.name}</Link>);
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

