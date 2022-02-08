import React from 'react'
import { Outlet, Link, Route } from 'react-router-dom';

import {Logo} from '../../components/Logo'
import { Menu } from '../../components/Menu'

import './index.scss'

export const Nav = () => {


    return (
        <nav id="nav" className="navigation">
            <Logo className = "navigation"/>
            <Menu className = "navigation"/>
        </nav>
    )
} 