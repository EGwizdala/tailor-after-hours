import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu} from './DropdownMenu/DropdownMenu'
import { GoogleIcon } from '../GoogleIcon';

interface MenuProps {
    className: string
    categoryType: string
    icon: string
    elementCategories: any[]
    title: string
    onClick?: (e) => void
}

export const MenuItemWithIcon: React.FC<MenuProps> = ({ className, elementCategories, categoryType, title, icon, onClick }) => {
  

   
    return (
        <Link

            id = {categoryType}
            to={`/${categoryType}`}
            className={`${className}__button dropdown`} >
            <span onClick={onClick} >{title}</span>
           
            {<GoogleIcon onClick={onClick} className={className} icon={icon}  />}
            <DropdownMenu className = "dropdown-menu" categoryType = {`${categoryType}`} categoriesList={elementCategories} classAnimation={ "" }
            />
        </Link>
    )
}

