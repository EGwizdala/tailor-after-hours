import React from 'react'

interface ImageWithButtonProps {
    imageSrc: React.ReactNode
    alt: string
    buttonText: string
    className: string
}

export const ImageWithButton: React.FC<ImageWithButtonProps> = ({imageSrc, alt, buttonText, className}) => {

    return (
        <div className={className}>
            <div className = {`${className}__image`}>{imageSrc}</div>
            <button className = {`${className}__button`} >{buttonText}</button> 
        </div>
    )
} 