
import { Header } from '../components/Header/Header';
import { MaterialCategoryList } from '../components/MaterialCategoryList';

import backgroundHeader from "../images/high-angle-of-seamstress-with-fabrics-and-scissors.jpg";

export const MaterialCategories = () => {


    return (
        <section id = "materialCategories">
            <Header
                alt = "high-angle-of-seamstress-with-fabrics-and-scissors"
                imagePosition="center 80%"
                imageSrc={backgroundHeader} />
            <MaterialCategoryList category = "materiały" title= "materiały"/>
        </section>
    )
} 