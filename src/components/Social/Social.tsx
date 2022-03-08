import { ReactComponent as Instagram } from '../../svg/Instagram.svg';
import { ReactComponent as Facebook } from '../../svg/Facebook.svg';

import './index.scss'

interface SocialProps {
    className: string
}

export const Social:React.FC<SocialProps> = ({className}) => {
    return (
        <>
            <a className={`${className}__button social`} href="https://www.instagram.com"><Facebook /></a>
            <a className={`${className}__button social`} href="https://www.facebook.com/"><Instagram /></a>
            
            
        </>
    )
} 