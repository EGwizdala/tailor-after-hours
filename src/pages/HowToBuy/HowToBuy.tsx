
import React from 'react';
import { Header } from '../../components/Header/Header';
import { ButtonLink } from '../../components/Button/ButtonLink';
import { SeeGallery } from '../../components/SeeGallery';

import Mail from '../../svg/Mail.svg'
import Stamps from '../../svg/Stamps.svg'

import backgroundHeader  from "../../images/top-view-accessories.jpg";

import './index.scss'

export const HowToBuy= () => {
    
    const east = <span className="material-icons-outlined">
        east
    </span>;

    const className = "howToBuy";

    return (

        <section id = "howToBuy" >
            <Header
                imageSrc={backgroundHeader} />
            <article className = {className}>
              
                <h1 className={`${className}__header`}>Jak kupować?</h1>
                <p className={`${className}__paragraph full-width`}>Produkty wykonywane są na zamówienie i każdorazowo istnieje możliwość modyfikacji danego produktu (rodzaj materiału, kolor, rozmiar itp.) wg indywidualnych potrzeb. Wszystkie produkty są wykonywane na zamówienie wg ustalonej specyfikacji z zamawiającym, dlatego też nie podlegają one zwrotowi.</p>
                <img className={`${className}__img`}
                    src={Mail} alt="Mail svg" />
                <p className={`${className}__paragraph`}>Jeśli jesteś zainteresowana zakupem, skontaktuj się z nami.<br />W informacji podaj produkt, który Cię interesuje, rozmiar, wybrany materiał oraz sposob dostawy:</p>
                <img src={Stamps} alt="Stamps svg" />
                <div className={`${className}__paragraph`}>
                <ul className={`${className}__ul`}>Poczta Polska:
                 <li>kurier</li>
                 <li>paczka</li>
                </ul>
                <ul className={`${className}__ul`}>Paczka Inpost:
                 <li>kurier</li>
                 <li>paczkomat</li>
                </ul>
                </div>
                
                <h1 className={`${className}__header`}>Pamiętaj !</h1>
                <p className={`${className}__paragraph full-width` }>Wszystkie produkty są wykonywane na zamówienie wg ustalonej specyfikacji z zamawiającym, dlatego też nie podlegają one zwrotowi.</p>
                
                <ButtonLink  href = "/Kontakt" className={className} icon={east}>Masz pytania? Napisz</ButtonLink>
                <SeeGallery className={`${className}__reference`}/>
            </article>
        </section>
    )
} 