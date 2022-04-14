import errorImg from '../../images/icons/error.svg'
import './index.scss';

export const PageError = () => {
    return (
        <div className="error">
            <h2 className = "error__text">Wystąpił nieoczekiwany błąd!</h2>
            <img className = "error__image" src={errorImg} alt="Komponents are loading" />
        </div>
    )
}