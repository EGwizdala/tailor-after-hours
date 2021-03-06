import { Home } from '../pages/Home';
import { Routes, Route, Outlet } from 'react-router-dom';
import {Nav} from'./Nav/Nav';
import { AboutMe } from '../pages/AboutMe/AboutMe';
import { Products } from '../pages/Products/Products';
import { Categories } from '../pages/Categories';
import { Product } from '../pages/Product/Product';
import { MaterialCategories } from '../pages/MaterialCategories';
import { Materials } from '../pages/Materials/Materials';
import { Material } from '../pages/Material/Material';
import { HowToBuy } from '../pages/HowToBuy/HowToBuy';
import { ContactMe } from '../pages/ContactMe/ContactMe';
import { PageError } from '../components/PageError/PageError';

const ROUTE_PREFIX = process.env.NODE_ENV === 'production' ? "/" : "/"



export const Main = () => {
    function LayoutsWithNavbar() {
        return (
          <>
            {/* Your navbar component */}
            <Nav />
      
            {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
            <Outlet /> 
            
                {/* You can add a footer to get fancy in here :) */}
                
          </>
        );
      }

    return (
        <Routes>
            <Route path={`${ROUTE_PREFIX}`} element={<LayoutsWithNavbar />}>
                <Route path={`/`} element={<Home />} />
                <Route path="/oMnie" element={<AboutMe />} />
                <Route path="/produkty" element={<Categories/>} />
                    <Route path="/produkty/:productType" element={<Products/>} />
                        <Route path="/produkty/:productType/:productId" element={<Product />}/>
                <Route path="/jakKupowac" element={<HowToBuy />} />


                <Route path="/materialy" element={<MaterialCategories />} />
                    <Route path="/materialy/:materialType" element={<Materials/>} />
                        <Route path="/materialy/:materialType/:materialId" element={<Material />}/>
                <Route path="/jakKupowac" element={<HowToBuy />} />
                <Route path="/Kontakt" element={<ContactMe />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>Ups! Nie ten adres :)</p>
                            <PageError />
                        </main>
                    }
                />
            </Route> 
        </Routes>
    )
} 