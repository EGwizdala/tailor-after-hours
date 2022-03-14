import {Social} from '../../components/Social/Social'

import './index.scss'

export const Footer = () => {
    const className = "footer"

    return (
        <footer className={className}>
            
            <ul className={`${className}__text`}>
                <h4>Zaprojektowane przez:</h4>
                <a href = "https://www.linkedin.com/in/agnieszka-dutkiewicz-456b5a224/" >Agnieszka Dutkiewicz (Backend)</a>
                <a href="https://www.linkedin.com/in/emiliagwizdala/" >Emilia Gwizdała (Frontend)</a>
                <a href =  "https://www.linkedin.com/in/agataszafarczyk/" >Agata Szafarczyk (UX/UI)</a>
                <a href =  "https://www.linkedin.com/in/agnieszkazawadzkascrum/" >Agnieszka Zawadzka (Scrum Master)</a>
                
            </ul>
            <div className={`${className}__social`}>
            <Social className={className} />
            </div>
            

            
        </footer>
    )
} 