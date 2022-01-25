import React from 'react'


interface LogoProps {
    className: string
}


export const Logo: React.FC<LogoProps>= ({className}) => {
    return (
        <>
            <a className={`${className}--logo`} href="#home">Krawcowa po godzinach</a>
        </>
    )
} 