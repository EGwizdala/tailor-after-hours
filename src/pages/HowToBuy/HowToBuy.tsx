
import React from 'react';

import { Header } from '../../components/Header/Header';
import { BuyPathCard } from '../../components/BuyPathCard/BuyPathCard';
import { ButtonLink } from '../../components/Button/ButtonLink';
import {SeeGallery} from '../../components/SeeGallery'

import backgroundHeader  from "../../images/top-view-accessories.jpg";

import './index.scss'

export const HowToBuy= () => {
    
    const east = <span className="material-icons-outlined">
        east
    </span>;

    const className = "howToBuy";

    const buyerPathElements =[
        { id: 1,
            text: 'Jeżeli podoba Ci się jakiś produkt, wyślij zapytanie korzystając z zakładki kontakt.'
        },
        { id: 2,
            text: 'Mailowo ustalimy szczegółów zamówienia, wycenę i termin wysyłki.'
        },
        { id: 3,
            text: 'Ustalenia zostaną zawarte w formularzu zlecenia, który zostanie przesłany do Ciebie pocztą.'
        },
        { id: 4,
            text: 'Po mailowym zaakceptowaniu i dokonaniu przedpłaty, przystąpimy do realizacji zlecenia.' },
        { id: 5,
            text: 'Przesyłki wysyłamy paczkomatem. Koszt przesyłki będzie doliczony do kosztów zamówienia. Istnieje możliwość odbioru osobistego w Skierniewicach.'
        },
               
    ]

    const buyerPath = buyerPathElements.map(element => {
        return <BuyPathCard key={element.id} number={element.id} text={element.text} />
    })
  

    return (

        <section id = "howToBuy" >
            <Header
                imageSrc={backgroundHeader} />
            <article className = {className}>
              
                <h1 className={`${className}__header`}>Jak kupować?</h1>
                <p className={`${className}__paragraph`}>Produkty wykonywane są na zamówienie i każdorazowo istnieje możliwość modyfikacji danego produktu (rodzaj materiału, kolor, rozmiar itp.) wg indywidualnych potrzeb. Wszystkie produkty są wykonywane na zamówienie wg ustalonej specyfikacji z zamawiającym, dlatego też nie podlegają one zwrotowi.</p>
                <p className={`${className}__paragraph`}>W celu indywidualnej wyceny należy postępować wg poniższego schematu:</p>
                <ul className={`${className}__path`}>
               { buyerPath}
                </ul>
                <ButtonLink className={className} icon={east}>Masz pytania? Napisz</ButtonLink>
                <SeeGallery className={`${className}__reference`}/>
            </article>
        </section>
    )
} 