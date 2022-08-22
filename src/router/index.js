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
      
      <Route element={<AppLayoutInves />}>
        <Route path="invesment" element={<Investment />} />
      </Route>
    </Routes>
  )
}

export default Router