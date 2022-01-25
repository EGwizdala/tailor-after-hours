import React from 'react'


interface MenuProps {
    className: string
}

export const Menu: React.FC<MenuProps> = ({ className }) => {
    const expaned_more_icon = <span className="material-icons-outlined">expand_more</span>

    return (
        <div className={`${className}--menu`}>
            <a className={`${className}--menu__button`} href="#aboutMe">O mnie</a>
            <a className={`${className}--menu__button`} href="#products">Produkty {expaned_more_icon}</a>
            <a className={`${className}--menu__button`} href="#materials">Materiały {expaned_more_icon}</a>
            <a className={`${className}--menu__button`} href="#howToBuy">Jak kupować</a>
            <a className={`${className}--menu__button`} href="#contact">Kontakt</a>
        </div>
    )
}

