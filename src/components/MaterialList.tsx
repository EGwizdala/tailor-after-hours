import { Outlet, useParams } from "react-router-dom";

import { CardListElement } from './CardListElement/CardListElement';
import { Card } from './Card/Card';
import { PageLoading } from './PageLoading/PageLoading';
import { PageError } from './PageError/PageError';
import { useFetch } from '../data/data';



interface MaterialListProps {
  title: any
  category: any
}

export const MaterialList: React.FC<MaterialListProps> = ({ title, category }) => {

     const className = "cardList";
     let params = useParams();
     const materialCategory = params.materialType;
  
  
  const [isLoading, isError, data] = useFetch(
    materialCategory
          ? `https://mighty-beyond-31038.herokuapp.com/api/types/${materialCategory.toLowerCase()}/fabrics`
          : null,
  )
  
    if (isLoading) {
      return <PageLoading />
    }
    if (isError) {
      return <PageError />
    }  
  
 
    const cardListDisplay = data ? data.map((product: any) => {
        return (
          <Card
                category = "materialy"
                productType={materialCategory}
                productId = {product.id}
                key={product.name}
                imageName={`${product.category}_${product.id}_1`}
                fileType="jpg"
                buttonText={product.name}
                subtitle={product.subname}
                />
        
            )
    }) : null;
   
  return (
        <CardListElement
            className={className}
            title={title}
            category={category}
        >
            {cardListDisplay}
            <Outlet />
            
        </CardListElement>
    )
}


