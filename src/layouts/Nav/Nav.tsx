import React, { useEffect, useState } from 'react';
import { useSpring, animated} from 'react-spring';

import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu/Menu';
import { MenuMobile } from '../../components/Menu/MenuMobile';
import { GoogleIcon } from '../../components/GoogleIcon';

import './index.scss'


export const Nav = () => {

    const [isActive, setActive] = useState(true);
    const hambrgerIcon = "menu";

    const materials = document.querySelectorAll('.side-menu');
    const array = Array.from(materials);
    const fadeIn = useSpring({
        to: {
            opacity: isActive ? 1 : 0,
        
        },
        from: {
            opacity: 0,
          
        },
        delay: 100,
    })
    
    const handleToggle = () => {
        setActive(!isActive)
    };

    useEffect(() => {
        setActive(false);
    }, [])

    if (!isActive) {
        array[0]?.classList.add("no-display");
    }
    
    return (
        <nav id="nav" className="navigation">
            <Logo className = "navigation"/>
            <GoogleIcon onClick={handleToggle} className="navigation--hamburger" icon={hambrgerIcon} />
            <Menu id="top-menu" className="navigation" />
            <animated.div style={fadeIn} >
                <MenuMobile className={isActive ? "display navigation" : "no-display navigation"} />
            </animated.div>
        </nav>
    )
} 