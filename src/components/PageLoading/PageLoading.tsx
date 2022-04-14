import loadingImg from '../../images/icons/loading.svg';
import './index.scss';

export const PageLoading = () => {
    return (
        <div className="loading">
            <h2 className = "loading__text">Strona w trakcie ładowania!</h2>
            <img className = "loading__image" src={loadingImg} alt="Komponents are loading" /> 
        </div>
    )
}