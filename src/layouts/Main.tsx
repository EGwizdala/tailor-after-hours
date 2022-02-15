import { Home } from '../pages/Home';
import { Routes, Route, Outlet } from 'react-router-dom';
import {Nav} from'./Nav/Nav';
import { AboutMe } from '../pages/AboutMe/AboutMe';
import { Products } from '../pages/Products/Products';
import { ProductsHome } from '../pages/ProductsHome';
import { Product } from '../pages/Product/Product';
import { HowToBuy } from '../pages/HowToBuy/HowToBuy';

const ROUTE_PREFIX = process.env.NODE_ENV === 'production' ? "/tailor-after-hours" : ""



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
            
            <Route path={`${ROUTE_PREFIX}/`} element={<LayoutsWithNavbar />}>
                <Route path="/" element={<Home />} />
                <Route path="/oMnie" element={<AboutMe />} />
                <Route path="/produkty" element={<ProductsHome/>} />
                    <Route path="/produkty/:productType" element={<Products/>} />
                        <Route path="/produkty/:productType/:productName" element={<Product />}/>
                <Route path="/jakKupowac" element={<HowToBuy />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>Ups! Nie ten adres :)</p>
                        </main>
                    }
                />
            </Route> 
        </Routes>
    )
} 