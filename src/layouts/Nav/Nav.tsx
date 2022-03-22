import React, { useEffect, useState } from 'react'

import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { GoogleIcon } from '../../components/GoogleIcon';

import './index.scss'


export const Nav = () => {

    const [isActive, setActive] = useState(true)

    const hambrger = "menu";

    const handleToggle = () => {
        setActive(!isActive)
    }

    useEffect(() => {
        setActive(false)
    }, [])
   
    
    return (
        <nav id="nav" className="navigation">
            <Logo className = "navigation"/>
            <GoogleIcon onClick={handleToggle} className="navigation--hamburger" icon={hambrger} />
            <Menu className={isActive ? "display navigation": " no-display navigation" }/>
        </nav>
    )
} 