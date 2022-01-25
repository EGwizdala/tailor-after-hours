import React from 'react';
import './CardList.scss';


interface CardListProps {
    className: string
    title: string
}

export const CardList: React.FC<CardListProps> = ({title, className, children}) => {
    

    return (
        <section className={className}>
            <h1 className={`${className}__header`}>{title}</h1>
            {children}
            
        </section>
    )
}

