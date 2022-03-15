import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu} from './DropdownMenu/DropdownMenu'
import { GoogleIcon } from './GoogleIcon';
import {getCategories} from '../data/data'

interface MenuProps {
    className: string
}

export const Menu: React.FC<MenuProps> = ({ className }) => {
    const [display, setDisplay] = useState(false);
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

    return (
        <>
        <div className={`${className}--menu`}>
            <Link className={`${className}--menu__button`} to="/oMnie">O mnie</Link>
                <Link to = "/produkty"
                    className={`${className}--menu__button dropdown`} >
                    Produkty
                    {<GoogleIcon className={display ? ` rotate ${className}` : `${className}`} icon={icon} />}
                    <DropdownMenu categoryType = "produkty" categoriesList={productCategories} classAnimation={display ? "menuSlideDown" :  "" }
                /> 
                </Link>
                <Link to = "/materialy"
                    className={`${className}--menu__button dropdown`} >
                    Materiały
                    {<GoogleIcon className={display ? ` rotate ${className}` : `${className}`} icon={icon} />}
                    <DropdownMenu categoryType = "materialy"  categoriesList={materialCategories} classAnimation={display ? "menuSlideDown" :  "" }
                /> 
                </Link>
                <Link className={`${className}--menu__button`} to="/jakKupowac">Jak kupować</Link>
                <Link className={`${className}--menu__button`} to= "/Kontakt">Kontakt</Link>
                
                
            {/* <a className={`${className}--menu__button`} href="#products">Produkty {<GoogleIcon className={className} icon={icon}/>}</a>
            <a className={`${className}--menu__button`} href="#materials">Materiały {<GoogleIcon className={className} icon={icon}/>}</a>
            <a className={`${className}--menu__button`} href="#howToBuy">Jak kupować</a>
            <a className={`${className}--menu__button`} href="#contact">Kontakt</a> */}
        </div>
        </>
    )
}

