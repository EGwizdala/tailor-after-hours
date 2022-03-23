import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu} from './DropdownMenu/DropdownMenu'
import { GoogleIcon } from '../GoogleIcon';

interface MenuProps {
    className: string
    categoryType: string
    elementCategories: any[]
    title: string
    onClick?: (e) => void
}

export const MenuItemWithIcon: React.FC<MenuProps> = ({ className, elementCategories, categoryType, title, onClick }) => {
    const [isActive, setActive] = useState(false);
    
    const icon = "expand_more";

   
    return (
        <Link
            // onClick={onClick}
            id = {categoryType}
            to={`/${categoryType}`}
            className={`${className}__button dropdown`} >
            {title}
            {<GoogleIcon onClick={onClick} className={className} icon={icon}  />}
            <DropdownMenu className = "dropdown-menu" categoryType = {`${categoryType}`} categoriesList={elementCategories} classAnimation={ "" }
            />
        </Link>
    )
}

