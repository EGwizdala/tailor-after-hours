import React from 'react';
import { GoogleIcon } from '../../components/GoogleIcon';

interface SliderProps {
    className: string
    backgroundArticle: string
}

export const Slider: React.FC<SliderProps> = ({className, backgroundArticle}) => {

    const articleImageStyle = {
        backgroundImage: `url(${backgroundArticle})`,
    };
    
    return (
        <div className={`${className}__slider`} >
                    <GoogleIcon
                        icon="chevron_left"
                        className={className}
                    />
                    <div className={`${className}__image`} style = {articleImageStyle} >
                    {/* <img
                        src={images.article}
                        alt="female tailor with the sewing machine"></img> */}
                        {/* <a href='https://pl.freepik.com/zdjecia/kobieta'>Kobieta zdjęcie utworzone przez freepik - pl.freepik.com</a> */}
                    <GoogleIcon
                        icon="chevron_right"
                        className={className}
                    />
                    </div>
                </div>
    )
}