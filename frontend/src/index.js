import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './landing_page/home/HomePage';
import AboutSection from './landing_page/about/AboutSection';
import MenuSection from './landing_page/menu/MenuSection';
import ServicesPage from './landing_page/services/ServicesPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Whatsapp from './landing_page/Whatsapp';
import Veg from './landing_page/menu/Veg';
import NonVeg from './landing_page/menu/NonVeg';
import ScrollToTop from './ScrollToTop';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>

<div className="app-container">
<ScrollToTop/>
<Navbar/>
<Routes>
<Route path='/' element={<HomePage/>}></Route>
<Route path='/about' element={<AboutSection/>}></Route>
<Route path='/menu' element={<MenuSection/>}></Route>
<Route path='/services' element={<ServicesPage/>}></Route>
<Route path='/menu/veg' element={<Veg/>}></Route>
<Route path='/menu/nonveg' element={<NonVeg/>}></Route>

<Route path='*' element={<NotFound/>}></Route>
</Routes>
<Whatsapp/>
<Footer/>
</div>

</BrowserRouter>
);

