import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu} from './DropdownMenu/DropdownMenu'
import { GoogleIcon } from './GoogleIcon';

interface MenuProps {
    className: string
}

export const Menu: React.FC<MenuProps> = ({ className }) => {
    const [display, setDisplay] = useState(false);
    
    const icon = "expand_more";

    return (
        <>
        <div className={`${className}--menu`}>
            <Link className={`${className}--menu__button`} to="/oMnie">O mnie</Link>
                <Link to = "/produkty"
                    className={`${className}--menu__button dropdown`} >
                    Produkty
                    {<GoogleIcon className={display ? ` rotate ${className}` : `${className}`} icon={icon} />}
                    <DropdownMenu classAnimation={display ? "menuSlideDown" :  "" }
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

