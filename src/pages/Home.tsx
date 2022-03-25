import { Header } from '../components/Header/Header';
import { ProductCategoryList } from '../components/ProductCategoryList';
import { MaterialCategoryList } from '../components/MaterialCategoryList';

import backgroundHeader from "../images/top-view-accessories.jpg";

export const Home = () => {


    return (
        <section id = "home">
            <Header  alt = "top-view-accessories" imageSrc={backgroundHeader }/>
            <ProductCategoryList category = "produkty" title= "produkty"/>
            <MaterialCategoryList category = "materiały" title= "materiały" />
        </section>
    )
} 