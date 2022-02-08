import React from 'react'

import './index.scss'

interface HeaderProps {
    imageSrc: string
}

export const Header: React.FC<HeaderProps> = ({ imageSrc }) => {
    const headerStyle = {
        backgroundImage: 'url('+imageSrc+')',
      };

    return (
        <header id="header" style={headerStyle} className = "header">
           <a href='https://pl.freepik.com/zdjecia/kobieta'>Kobieta zdjęcie utworzone przez freepik - pl.freepik.com</a>
        </header>
    )
} 