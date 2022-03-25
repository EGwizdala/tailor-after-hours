import React from 'react';

import { Header } from '../../components/Header/Header';
import {Social} from '../../components/Social/Social'
import backgroundHeader  from "../../images/back-view-of-female-tailor-with-patterns-in-hands.jpg";

import './index.scss'



export const ContactMe = () => {
    const className = "contactMe";

    return (
        <section id = {className}  className = {className}>
            <Header
                alt = "back-view-of-female-tailor-with-patterns-in-hands"
                backgroundSize="150%"
                imagePosition="center 80px"
                imageSrc={backgroundHeader} />
            <h1 className={`${className}__header`}>Kontakt</h1>
            <div className = {`${className}__container`}>
              
                
                <article className={`${className}__article`}>
                    <p className={`${className}__paragraph`}>Masz pytania? Chcesz złożyć zamówienie? Zapraszam do kontaktu mailowego lub telefonicznego.</p>
                    <p className={`${className}__paragraph`}>Zapraszam również do śledzenia mnie na portalach społecznościowych! Dzięki temu będziesz na bieżąco z nowościami na stronie!</p>
                </article>
               
                <article className={`${className}__article`}>
                    <a href = "mailto:krawcowa@pogodzinach.com" className={`${className}__contact-detail`}>krawcowa@pogodzinach.com</a>
                    <a href="tel:500 600 700" className={`${className}__contact-detail`}>500 600 700</a>
                    <div className={`${className}__contact-detail`}><Social className={`${className}`}/></div>
                    
                </article>
                
            </div>
        </section>
    )
    
} 