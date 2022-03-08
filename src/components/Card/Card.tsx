import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { ButtonLink } from '../Button/ButtonLink';
import { GoogleIcon } from '../GoogleIcon';
import "./index.scss";

interface CardProps {
    imageName: string
    fileType: string
    buttonText: string
    subtitle: string
    productType: any
    productId: any
}

export const Card: React.FC<CardProps> = ({imageName, fileType, buttonText, subtitle, productId, productType}) => {
    
    const className = "card";
    const icon = "arrow_forward";

    const div = <div className={`${className}__image`}
        style={{
            backgroundColor:"red"}}></div>
    return (
        <div className={className}>
            <LazyLoadComponent
                delayTime="500">
            <div
                className={`${className}__image`}
                style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/clothes/${imageName}.${fileType})`}}>
                </div>
            </LazyLoadComponent>
            
            <div className={`${className}__description`} >
                <div className={`${className}__subtitle`}>{subtitle}</div>
                <div className={`${className}__link`} > 
                    <ButtonLink href = {`/produkty/${productType}/${productId}`} className={className} icon={<GoogleIcon className={className} icon={icon} />}>{buttonText}</ButtonLink>
                </div>
            </div>
        </div>
    )
} 