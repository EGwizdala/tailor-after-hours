import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
    className: string
}


export const Logo: React.FC<LogoProps>= ({className}) => {
    const ROUTE_PREFIX = process.env.NODE_ENV === 'production' ? "/tailor-after-hours" : "/"

    
    return (
        <>
            <Link className={`${className}--logo`} to={`${ROUTE_PREFIX}`}>Krawcowa po godzinach</Link>
        </>
    )
} 