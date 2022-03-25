import React from 'react'

import './index.scss'

interface HeaderProps {
    imageSrc: string
    alt: string
    imagePosition?: string
    backgroundSize?: string
}

export const Header: React.FC<HeaderProps> = ({ imageSrc, imagePosition, backgroundSize, alt }) => {
    const headerStyle = {
        backgroundImage: 'url(' + imageSrc + ')',
        backgroundPosition: `${imagePosition}`,
        backgroundSize: `${backgroundSize}`
      };

    return (
        <header id="header" style={headerStyle} className="header">
            <span role="img" aria-label={alt}> </span>
           
           <a href='https://pl.freepik.com/zdjecia/kobieta'>Kobieta zdjęcie utworzone przez freepik - pl.freepik.com</a>
        </header>
    )
} 