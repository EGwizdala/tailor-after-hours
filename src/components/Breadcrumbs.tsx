import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
    category: string
    mainCategory: string
    id: string
    product: string

}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({category, id, product, mainCategory}) => {

    return (
        <>
            <Link className="bredacrumbs" to={`/${mainCategory}`}>{mainCategory}</Link>/
            <Link className="bredacrumbs" to={`/${mainCategory}/${category}`}>{category}</Link>/
            <Link className="bredacrumbs" to={`/${mainCategory}/${category}/${id}`}>{ product }</Link>
        </>
    )
}