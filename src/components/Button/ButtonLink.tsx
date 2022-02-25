import {Link} from 'react-router-dom'

import './ButtonLink.scss';

interface ButtonLinkProps {
    className: string
    icon: React.ReactNode
    href: string
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ className, icon, children, href}) => (
    <Link to={href} className={`${className}__button buttonLink`} >{children} {icon} </Link>
    // <a className={`${className}__button buttonLink`} href={`#${href}`}></a>
);
    