import React from 'react';
import { Link } from "react-router-dom";


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
            <div style={backgroundStyle} className = {`${className}__image`}>{children}</div>
            <Link onClick = {onClick} to={productType === 'produkty' || productType === 'materiały' ?  `/${category}` : `/${category}/${productType}`} className={`${className}__button`} >{buttonText}
            </Link>
        </div>
    )
} 