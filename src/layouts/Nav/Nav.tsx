import React from 'react'

import {Logo} from '../../components/Logo'
import { Menu } from '../../components/Menu'

import './Nav.scss'

export const Nav = () => {


    return (
        <nav id = "nav" className = "navigation">
            <Logo className = "navigation"/>
            <Menu className = "navigation"/>
        </nav>
    )
} 