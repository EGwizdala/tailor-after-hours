import { Home } from '../pages/Home';
import { Routes, Route, Outlet } from 'react-router-dom';
import {Nav} from'./Nav/Nav';
import { Footer } from './Footer/Footer';
import { AboutMe } from '../pages/AboutMe/AboutMe';
import { Products } from '../pages/Products/Products';
import { Product } from '../pages/Product/Product';

const Type = () => <div>kura rura</div>

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
            
            <Route path="/" element={<LayoutsWithNavbar />}>
                <Route path="/tailor-after-hours" element={<Home />} />
                <Route path="/aboutMe" element={<AboutMe />} />
                <Route path="/produkty/:productType" element={<Products/>} />
               
                <Route path="/produkty/:productType/:productName" element={<Product />}/>
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>Ups! Nie ten adres :)</p>
                        </main>
                    }
                />
             
        </Routes>
    )
} 