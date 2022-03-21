import { Outlet, useParams } from "react-router-dom";

import { CardListElement } from './CardListElement/CardListElement';
import { Card } from './Card/Card';
import { PageLoading } from './PageLoading/PageLoading';
import { PageError } from './PageError/PageError';
import { useFetch } from '../data/data';



interface ProductListProps {
  title: any
  category: any
}

export const ProductList: React.FC<ProductListProps> = ({ title, category }) => {

     const className = "cardList";
     let params = useParams();
     const productCategory = params.productType;
  
  
  const [productLoading, productError, productData] = useFetch(
        productCategory
          ? `http://mighty-beyond-31038.herokuapp.com/api/categories/${productCategory.toLowerCase()}/items`
          : null,
  )
  
    if (productLoading) {
      return <PageLoading />
    }
    if (productError) {
      return <PageError />
    }  
  
 
    const cardListDisplay = productData ? productData.map((product: any) => {
        return (
          <Card
              category="produkty"
              mainCategory = "produkty"
              productType={productCategory}
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


