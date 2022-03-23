import React, { useEffect, useState } from 'react'

import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu/Menu';
import { MenuMobile } from '../../components/Menu/MenuMobile';
import { GoogleIcon } from '../../components/GoogleIcon';

import './index.scss'


export const Nav = () => {

    const [isActive, setActive] = useState(true)

    const hambrger = "menu";

    const handleToggle = () => {
        setActive(!isActive)
    }
    const materials = document.querySelectorAll('.side-menu');
    const array = Array.from(materials)
   
    console.log(array)

    useEffect(() => {
        setActive(false)
        
    }, [])
    if (!isActive) {
        array[0]?.classList.add("no-display")
    }
    console.log(isActive)
    return (
        <nav id="nav" className="navigation">
            <Logo className = "navigation"/>
            <GoogleIcon onClick={handleToggle} className="navigation--hamburger" icon={hambrger} />
            <Menu className="navigation" />
            <MenuMobile className={isActive ? "display navigation": "no-display navigation" }/>
        </nav>
    )
} 