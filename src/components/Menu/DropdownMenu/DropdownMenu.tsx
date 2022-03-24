import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

interface DropdownMenuProps {
    classAnimation?: string
    categoriesList: any
    categoryType: string
    className: string

}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ classAnimation, categoriesList, categoryType, className }) => {
    const [categories, setCategories] = useState<any[]>([]);
    
    
    
 

    const category = categoriesList.map((category) => <Link
        key={category.name || category.type}
        className={`${className}__button`}
        to={`/${categoryType}/${category.name || category.type}`}
        >
        {category.name || category.type}
    </Link>);
    
    return (
        <>
            <div className={`${className} ${classAnimation}`}>
            {category}
        </div>
        </>
    )
}

