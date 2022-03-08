import errorImg from '../../images/Error.jpg'
import './index.scss';

export const PageError = () => {
    return (
        <div className="error">
            <h2 className = "error__text">Wystąpił nieoczekiwany błąd!</h2>
            <img className = "error__image" src={errorImg} alt="Komponents are loading" />
            <a className="error__alt" href='https://pl.freepik.com/wektory/ludzie'>Ludzie plik wektorowy utworzone przez pch.vector - pl.freepik.com</a>
 
        </div>
    )
}