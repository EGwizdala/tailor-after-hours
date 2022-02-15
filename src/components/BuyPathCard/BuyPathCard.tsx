import React from 'react';
import "./index.scss";

interface BuyPathCardProps {
    number: number
    text: string
}

export const BuyPathCard: React.FC<BuyPathCardProps> = ({number, text}) => {
    
    const className = "buyPathCard"
    const icon = "arrow_forward"
    return (
        <div className={className}>
        <div className={`${className}__number`}>{number}</div>
            <div className={`${className}__arrow`}></div>
            <div className={`${className}__text`}>{text}</div>

        </div>
    )
} 