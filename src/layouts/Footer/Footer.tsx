import { ReactComponent as Instagram } from '../../svg/Instagram.svg';
import { ReactComponent as Facebook } from '../../svg/Facebook.svg';
import { ReactComponent as UpArrow } from '../../svg/Component 17 – 21.svg';

import './index.scss'

export const Footer = () => {
    const className = "footer"

    return (
        <footer className={className}>
            <a className={`${className}__button`} href=""><Instagram /></a>
            <a className={`${className}__button`} href=""><Facebook /></a>
            <a className={`${className}__button`} href="#nav"><UpArrow/></a>
            
            
        </footer>
    )
} 