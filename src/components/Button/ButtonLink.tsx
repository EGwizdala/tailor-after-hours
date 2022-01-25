import './ButtonLink.scss'

interface ButtonLinkProps {
    className: string
    icon: React.ReactNode
    href: string
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ className, icon, children, href }) => (
    <a className={`${className}__button buttonLink`} href={`#${href}`}>{children} {icon}</a>
);
    