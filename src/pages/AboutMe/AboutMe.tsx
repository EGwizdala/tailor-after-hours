import React from 'react';

import { Header } from '../../components/Header/Header';
import { ButtonLink } from '../../components/Button/ButtonLink';
import {SeeGallery} from '../../components/SeeGallery'

import backgroundHeader  from "../../images/back-view-of-female-tailor-with-patterns-in-hands.jpg";
import backgroundArticle from "../../images/high-angle-of-seamstress-using-sewing-machine.jpg"

import './index.scss'


export const AboutMe = () => {
    const east = <span className="material-icons-outlined">
        east
    </span>;

    const className = "aboutMe";

    const articleImageStyle = {
        backgroundImage: `url(${backgroundArticle})`,
      };

    return (

        <section id = "aboutMe" >
            <Header
                imageSrc={backgroundHeader} />
            <article className = {className}>
                <div className={`${className}__image`} style = {articleImageStyle} >
                    {/* <img
                        src={images.article}
                        alt="female tailor with the sewing machine"></img> */}
                    {/* <a href='https://pl.freepik.com/zdjecia/kobieta'>Kobieta zdjęcie utworzone przez freepik - pl.freepik.com</a> */}
                </div>
                <h1 className={`${className}__header`}>O mnie</h1>
                <h2 className={`${className}__subtitle`}>Szycie to moja pasja! </h2>
                <p className={`${className}__paragraph`}>Cześć! Jestem Ewa, księgowa z zawodu. Na tej stronie dzielę się z Tobą, tym co tworzę po godzinach pracy. Zapraszam do galerii moich prac krawieckich. Znajdziesz tu jakościowe materiały skrojone w fantastyczne formy odzieży, wykonane z dbałością o każdy szczegół.</p>
                <ButtonLink className={className} icon={east}>Masz pytania? Napisz</ButtonLink>
                <SeeGallery className={`${className}__reference`}/>
            </article>
        </section>
    )
} 