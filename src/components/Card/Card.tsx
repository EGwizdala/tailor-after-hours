import React from 'react';
import { ButtonLink } from '../Button/ButtonLink';
import {GoogleIcon} from '../GoogleIcon'
import "./Card.scss";

interface CardProps {
    imageName: string
    fileType: string
    buttonText: string
    subtitle: string
}

export const Card: React.FC<CardProps> = ({imageName, fileType, buttonText, subtitle}) => {
    
    const className = "card"
    const icon = "arrow_forward"
    return (
        <div className={className}>
            <div
                className={`${className}__image`}
                style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/${imageName}.${fileType})`}}>
            </div>
            <div className={`${className}__description`} >
                <div className={`${className}__subtitle`}>{subtitle}</div>
                <ButtonLink className={className} icon = {<GoogleIcon className={className} icon={icon}/>} href = {""}>{buttonText}</ButtonLink>
            </div>
        </div>
    )
} 