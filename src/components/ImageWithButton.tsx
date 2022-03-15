import React from 'react';
import { Link } from "react-router-dom";
import { LazyLoadComponent } from 'react-lazy-load-image-component';


interface ImageWithButtonProps {
    imageSrc: React.ReactNode
    buttonText: string
    className: string
    productType: any
    category: string
    onClick?: (e: React.FormEvent<EventTarget>) => void
}

export const ImageWithButton: React.FC<ImageWithButtonProps> = ({ imageSrc, buttonText, className, children, productType, category, onClick}) => {
    
    const backgroundStyle = {
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/icons/${imageSrc}')`,
      };

    return (
        <div className={className}>
            <LazyLoadComponent>
            <div style={backgroundStyle} className = {`${className}__image`}>{children}</div>
            </LazyLoadComponent>
            <Link onClick = {onClick} to={productType === 'Produkty' ?  `/${category}` : `/${category}/${productType}`} className={`${className}__button`} >{buttonText}
            </Link>
        </div>
    )
} 