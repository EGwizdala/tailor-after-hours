import React from 'react';
import './index.scss';


interface CardListProps {
    className: string
    title: string
    category: string
}

export const CardListElement: React.FC<CardListProps> = ({title, className, children, category}) => {
    

    return (
        <section id={category} className={className}>
            <h1 className={`${className}__header`}>{title}</h1>
            {children}
            
        </section>
    )
}

