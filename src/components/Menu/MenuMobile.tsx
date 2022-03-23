import React, {useState, useEffect} from 'react';

import { Menu } from './Menu';
import {SideMenu} from './SideMenu/SideMenu'
import { getCategories } from '../../data/data';

interface MenuProps {
    className: string
}

export const MenuMobile: React.FC<MenuProps> = ({ className }) => {
    const [productIsActive, setProductIsActive] = useState(false);
    const [materialIsActive, setMaterialIsActive] = useState(false);
    const [productCategories, setProductCategories] = useState<any[]>([]);
    const [materialCategories, setMaterialCategories] = useState<any[]>([]);
    

    const productId = 'produkty';
    const materialId = 'materialy'

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



    const handleToggle = (e) => {
        const id = e.target.parentElement.id;
        console.log(e.target.parentElement)

        if (id === productId) {
            setProductIsActive(!productIsActive)
           
            
        }
        if (id === materialId) {
            setMaterialIsActive(!materialIsActive)
            setProductIsActive(false)
          
        } else if (id === "return"){
            setProductIsActive(false)
            setMaterialIsActive(false)
        }
    }
    console.log(productIsActive)
    console.log(materialIsActive)
   
    return (
        <>
            
            <Menu onClick={handleToggle} className={!productIsActive || !materialIsActive ? className : `no-display ${className}`} />
            
            {productIsActive ? <SideMenu
                onClick={handleToggle}
                elementCategories={productCategories}
                categoryType={productId}
                title={productId} /> : null}

            {materialIsActive ? 
            <SideMenu onClick={handleToggle}
                elementCategories={materialCategories}
                categoryType={materialId}
                    title={materialId} /> : null
            }
        </>
    )
}

