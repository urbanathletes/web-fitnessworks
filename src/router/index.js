import React from 'react'
import { Routes, Route } from "react-router-dom";
import AppLayout from '../components/AppLayout';
import AppLayoutInves from '../components/AppLayoutInves';
import Home from '../views/Home';
import About from '../views/About';
import Article from '../views/Article';
import Faq from '../views/Faq';
import Shop from '../views/Shop';
import Tnc from '../views/Tnc';
import Workouts from '../views/Workouts';
import Investment from '../views/investment';
import OurFounder from '../views/investment/OurFounder';
import MarketStrategy from '../views/investment/MarketStrategy';
import Presentation from '../views/investment/Presentation';
import NotFont from '../views/NotFont';

function Router(props) {
  return (
    <Routes>
      <Route element={<AppLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="article" element={<Article />} />
        <Route path="faq" element={<Faq />} />
        <Route path="shop" element={<Shop />} />
        <Route path="tnc" element={<Tnc />} />
        <Route path="workouts" element={<Workouts />} />
      </Route>
      
      <Route path="invesment" element={<AppLayoutInves />}>
        <Route index element={<Investment />} />
        <Route path="our-founder" element={<OurFounder />} />
        <Route path="market-strategy" element={<MarketStrategy />} />
        <Route path="presentation" element={<Presentation />} />
        {/* <Route path="invesment"} >
        </Route> */}
      </Route>
      
      <Route path="*" element={<NotFont />} />
    </Routes>
  )
}

export default Router