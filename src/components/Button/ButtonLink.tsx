

import './ButtonLink.scss';

interface ButtonLinkProps {
    className: string
    icon: React.ReactNode
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ className, icon, children}) => (
    <button className={`${className}__button buttonLink`} >{children} {icon}</button>
    // <a className={`${className}__button buttonLink`} href={`#${href}`}></a>
);
    