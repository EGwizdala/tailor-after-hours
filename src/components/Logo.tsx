import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
    className: string
}


export const Logo: React.FC<LogoProps>= ({className}) => {
    return (
        <>
            <Link className={`${className}--logo`} to="/">Krawcowa po godzinach</Link>
        </>
    )
} 