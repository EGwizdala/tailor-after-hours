import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {MenuItemWithIcon} from './MenuItemWithIcon'
import {getCategories} from '../../data/data'

interface MenuProps {
    className: string
    onClick?: (e) => void
}

export const Menu: React.FC<MenuProps> = ({ className, onClick }) => {
    const [isActive, setActive] = useState(false);
    const [productCategories, setProductCategories] = useState<any[]>([]);
    const [materialCategories, setMaterialCategories] = useState<any[]>([]);
    
    useEffect(() => {
        const productCategoriesData = getCategories("http://mighty-beyond-31038.herokuapp.com/api/categories");
        const mterialCategoriesData = getCategories("https://mighty-beyond-31038.herokuapp.com/api/types/");

        const printCategories = async () => {
            const productList = await productCategoriesData;
            const materialList = await mterialCategoriesData;
            setProductCategories(productList);
            setMaterialCategories(materialList)

          };
          printCategories();
 
    }, [])
    
    
    const icon = "expand_more";

    // const handleToggle = (e) => {
    //     console.log(e.target.parentElement.querySelector("div"))
    //     e.target.classList.toggle('rotate');
    //     e.target.parentElement.querySelector(".dropdown-menu").classList.toggle('menuSlideDown');
    //     setActive(!isActive)
    // }
   
    return (
        <>
        <div className={`${className}--menu`}>
                <Link className={`${className}--menu__button`} to="/oMnie">O mnie</Link>
                <MenuItemWithIcon onClick={onClick}className={`${className}--menu`} elementCategories={productCategories} categoryType="produkty" title = "produkty" />
                <MenuItemWithIcon className={`${className}--menu`} onClick={onClick}elementCategories={materialCategories} categoryType = "materialy" title = "materiały" />
                <Link className={`${className}--menu__button`} to="/jakKupowac">Jak kupować</Link>
                <Link className={`${className}--menu__button`} to= "/Kontakt">Kontakt</Link>
        </div>
        </>
    )
}

