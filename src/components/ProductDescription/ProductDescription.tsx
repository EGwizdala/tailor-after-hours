import { ButtonLink } from '../../components/Button/ButtonLink';
import { GoogleIcon } from '../../components/GoogleIcon';
import {Breadcrumbs} from '../Breadcrumbs'

import './index.scss';

interface ProductDescriptionProps {
    className: string
    productName: string | any
    subname: string
    category: string
    size: string
    fabrics: string
    id: string
};

export const ProductDescription: React.FC<ProductDescriptionProps> = ({className, productName, subname, category, size, fabrics, id}) => {
    return (
        <>
        <div className={`${className}__container`}>
                <nav className={`${className}__nav`}><Breadcrumbs product={productName}category={category} id={id}/>
            </nav>
            <h1 className={`${className}__header`}>{productName}</h1>
            <div className={`${className}__subtitle--lowercase`}>{subname} </div>
            <div className={`${className}__subtitle`} >{category}</div>
            <div className={`${className}__subtitle`}>{size}</div>
            <div className={`${className}__subtitle`}>Polecane materiały:</div>
            <div className={`${className}__subtitle--lowercase`}>{fabrics}</div>
                <ButtonLink
                    href = "/Kontakt"
                    className={className}
                    icon={
                        <GoogleIcon
                            icon="east"
                            className={className} />
                    }>Masz pytania? Napisz
            </ButtonLink>
        </div>
       
        </>
    )
}