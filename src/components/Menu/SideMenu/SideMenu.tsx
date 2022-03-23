import React, {useState, useEffect} from 'react';

import { DropdownMenu} from '../DropdownMenu/DropdownMenu'
import { GoogleIcon } from '../../GoogleIcon';

import './index.scss';

interface MenuProps {
    categoryType: string
    elementCategories: any[]
    title: string
    onClick?: (e) => void
}

export const SideMenu: React.FC<MenuProps> = ({ elementCategories, categoryType, title, onClick }) => {

    const icon = "chevron_right";
    const className = "side-menu";
   
    return (
        <div
            id = {categoryType}
            
            className={`${className}`} >
            <div className={`${className}__title`}>{title}</div>
            <GoogleIcon id = "return" className={className} icon={icon}  onClick={onClick}/>
            <DropdownMenu className = {`${className}__list`} categoryType = {`${categoryType}`} categoriesList={elementCategories} classAnimation={ "" }
            />
        </div>
    )
}

