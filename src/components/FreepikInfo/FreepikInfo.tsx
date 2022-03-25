import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { GoogleIcon } from '../GoogleIcon';
import './index.scss';

interface Freepik {
    className: string
}

export const FreepikInfo: React.FC<Freepik> = ({className}) => {
    const [isVisble, setVisible] = useState(false);

    const fadeIn = useSpring({
      to: { opacity: isVisble ? 1 : 0 },
      from: { opacity: 0 },
      delay: 10,
    })

   
    const handleToggleClick = () => {
        setVisible(!isVisble)
    }

   
    return (
        <div className={`${className} freepik`}>
            <h3 onClick={handleToggleClick} className="freepik__header">
                Autotrzy zdjęć:
                <GoogleIcon icon="expand_more" className={!isVisble ? "freepik" : 'rotate freepik'}/>
            </h3>
            {isVisble ? 
            <animated.div style={fadeIn} className = "freepik__links">
                <a href = "https://pixabay.com/pl">Pixabay,</a>
                <a href='https://pl.freepik.com/zdjecia/kobieta'>Kobieta zdjęcie utworzone przez haritanita - pl.freepik.com,</a>
                <a href='https://pl.freepik.com/zdjecia/ludzie'>Ludzie zdjęcie utworzone przez rawpixel.com - pl.freepik.com,</a>
                <a href='https://pl.freepik.com/zdjecia/szkola'>Szkoła zdjęcie utworzone przez KamranAydinov - pl.freepik.com,</a>
                <a href='https://pl.freepik.com/zdjecia/zima'>Zima zdjęcie utworzone przez svetlanasokolova - pl.freepik.com,</a>
                <a href='https://pl.freepik.com/zdjecia/biznes'>Biznes zdjęcie utworzone przez user15285612 - pl.freepik.com,</a>
                <a href='https://pl.freepik.com/zdjecia/mezczyzna'>Mężczyzna zdjęcie utworzone przez rawpixel.com - pl.freepik.com,</a>
                <a href="https://pl.freepik.com/zdjecia/dziewczyna">Dziewczyna zdjęcie utworzone przez master1305 - pl.freepik.com,</a>
                <a href="https://pl.freepik.com/zdjecia/tlo">Tło zdjęcie utworzone przez photoroyalty - pl.freepik.com,</a>
                </animated.div>
                : null }
                
            
            
        </div>
    )
}