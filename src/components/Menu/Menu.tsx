import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MenuItemWithIcon } from './MenuItemWithIcon';
import { getCategories } from '../../data/data';

interface MenuProps {
    className: string
    id: string
    onClick?: (e) => void
}

export const Menu: React.FC<MenuProps> = ({ className, id, onClick }) => {

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
    
   
    return (
       
        <div className={`${className}--menu`} id = {id}>
                <Link className={`${className}--menu__button`} to="/oMnie">O mnie</Link>
                <MenuItemWithIcon   icon = "expand_more" onClick={onClick}className={`${className}--menu`} elementCategories={productCategories} categoryType="produkty" title = "produkty" />
                <MenuItemWithIcon icon = "expand_more"   className={`${className}--menu`} onClick={onClick}elementCategories={materialCategories} categoryType = "materialy" title = "materiały" />
                <Link className={`${className}--menu__button`} to="/jakKupowac">Jak kupować</Link>
                <Link className={`${className}--menu__button`} to= "/Kontakt">Kontakt</Link>
        </div>
    
    )
}

