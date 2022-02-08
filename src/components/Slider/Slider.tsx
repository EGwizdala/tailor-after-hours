import React from 'react';
import { GoogleIcon } from '../../components/GoogleIcon';

import './index.scss'

interface SliderProps {
    className: string
    backgroundArticle: string
}

export const Slider: React.FC<SliderProps> = ({className, backgroundArticle}) => {

    const articleImageStyle = {
        backgroundImage: `url(${backgroundArticle})`,
    };

    const sliderClassName = "slider"
    
    return (
        <div className={`${className}__slider ${sliderClassName}`} >
            <GoogleIcon
                icon="arrow_back_ios_new"
            className={sliderClassName}
            />
            <div className={`${sliderClassName}__image`} style = {articleImageStyle} >
            {/* <img
                src={images.article}
                alt="female tailor with the sewing machine"></img> */}
                {/* <a href='https://pl.freepik.com/zdjecia/kobieta'>Kobieta zdjęcie utworzone przez freepik - pl.freepik.com</a> */}
            </div>
            <GoogleIcon
                icon="arrow_forward_ios"
                className={sliderClassName}
            />
        </div>
    )
}