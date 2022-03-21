import React from 'react'

import {Logo} from '../../components/Logo'
import { Menu } from '../../components/Menu'
import { MenuMobile } from '../../components/MenuMobile'

import './index.scss'

export const Nav = () => {


    return (
        <nav id="nav" className="navigation">
            <Logo className = "navigation"/>
            <Menu className="navigation" />
            <MenuMobile className="navigation" />
        </nav>
    )
} 