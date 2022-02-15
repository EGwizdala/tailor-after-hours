import { ButtonLink } from '../../components/Button/ButtonLink';
import { GoogleIcon } from '../../components/GoogleIcon';

import './index.scss';

interface ProductDescriptionProps {
    className: string
    productName: string | any
    id: string
    category: string
    size: string
    materials: string
    description: string
};

export const ProductDescription: React.FC<ProductDescriptionProps> = ({className, productName, id, category, size, materials, description}) => {
    return (
        <>
        <div className={`${className}__container`}>
            <nav className={`${className}__nav`}>Home/Porduct/Produkty
            </nav>
            <h1 className={`${className}__header`}>{productName}</h1>
            <div className={`${className}__subtitle--lowercase`}>{id} </div>
            <div className={`${className}__subtitle`} >{category}</div>
            <div className={`${className}__subtitle`}>{size}</div>
            <div className={`${className}__subtitle`}>Polecane materiały:</div>
            <div className={`${className}__subtitle--lowercase`}>{materials}</div>
            <ButtonLink
                    className={className}
                    icon={
                        <GoogleIcon
                            icon="east"
                            className={className} />
                    }>Masz pytania? Napisz
            </ButtonLink>
        </div>
        <h2
            className={`${className}__header--secondary`}>
            Opis
        </h2>
        <p className={`${className}__paragraph`}>
            {description}
        </p>
        </>
    )
}