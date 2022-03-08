import {Social} from '../../components/Social/Social'

import './index.scss'

export const Footer = () => {
    const className = "footer"

    return (
        <footer className={className}>
            
            <ul className={`${className}__text`}>
                <li className={`${className}__li`}>STRONĘ WYKONALI:</li>
                <li className={`${className}__li`}>Agnieszka Dutkiewicz,</li>
                <li className={`${className}__li`}>Emilia Gwizdała,</li>
                <li className={`${className}__li`}>Agnieszka Zawadzka,</li>
                <li className={`${className}__li`}>Agata Szafarczyk</li>
            </ul>
            <div className={`${className}__social`}>
            <Social className={className} />
            </div>
            

            
        </footer>
    )
} 