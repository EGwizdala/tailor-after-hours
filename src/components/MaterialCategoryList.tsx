
import { CardListElement } from './CardListElement/CardListElement';
import { ImageWithButton } from './ImageWithButton';

import { useFetch } from '../data/data';
import { PageLoading } from './PageLoading/PageLoading';
import { PageError } from './PageError/PageError';


interface ProductCategoryListProps {
    title: string  | any
    category: string | any
}

export const MaterialCategoryList: React.FC<ProductCategoryListProps> = ({ title, category}) => {
   
    const className = "cardList";
    const scrollTop = function() {
        window.scrollTo(0, 0);
    };

   const [ materialLoading, materialError, materialData] = useFetch('https://mighty-beyond-31038.herokuapp.com/api/types/')
  
    if ( materialLoading) {
      return <PageLoading />
    }
    if ( materialError) {
      return <PageError />
    }  

    const cardListDisplay = materialData.filter(material => material.name != category).map((material) => {
        return (
            <ImageWithButton
                    category = "materialy"
                    onClick = {scrollTop}
                    productType= {material.type}
                    className={`${className}__card`}
                    key={material.type}
                    imageSrc={`${material.type}.svg`}
                    buttonText={material.type} />
            )
        });

    return (
        <CardListElement className={className} category={title} title={title} >
            {cardListDisplay}
        </CardListElement>
    )
}

