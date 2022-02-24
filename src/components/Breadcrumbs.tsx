import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
    category: string
    id: string
    product: string

}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({category, id, product}) => {

    return (
        <>
            <Link className="bredacrumbs" to="/produkty">Produkty</Link>/
            <Link className="bredacrumbs" to={`/produkty/${category}`}>{category}</Link>/
            <Link className="bredacrumbs" to={`/produkty/${category}/${id}`}>{ product }</Link>
        </>
    )
}