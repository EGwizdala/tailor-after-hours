import { ButtonLink } from '../Button/ButtonLink';
import { GoogleIcon } from '../GoogleIcon';

import './index.scss';

interface MaterialDescriptionProps {
    className: string
    productName: string | any
    grammage: string
    category: string
    recommended: string
    id: string
};

export const MaterialDescription: React.FC<MaterialDescriptionProps> = ({className, productName, grammage, category, recommended, id}) => {
    return (
        <>
        <div className={`${className}__container`}>
                
            <h1 className={`${className}__header`}>{productName}</h1>
            <div className={`${className}__subtitle--lowercase`}>{grammage} </div>
                <div className={`${className}__subtitle`} >{category}</div>
            <div className={`${className}__subtitle`}>Polecane do:</div>
            <div className={`${className}__subtitle--lowercase`}>{recommended}</div>
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