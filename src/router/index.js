import React from 'react'
import { Routes, Route } from "react-router-dom";
import AppLayout from '../components/AppLayout';
import AppLayoutInves from '../components/AppLayoutInves';
import AppLayoutBlank from '../components/AppLayoutBlank';
import FaqsLayout from '../components/FaqsLayout';
import NotFont from '../components/NotFont';
import Home from '../views/Home';
import About from '../views/About';
import Article from '../views/Article';
import Shop from '../views/Shop';
import Tnc from '../views/Tnc';
import Investment from '../views/investment';
import OurFounder from '../views/investment/OurFounder';
import MarketStrategy from '../views/investment/MarketStrategy';
import Presentation from '../views/investment/Presentation';
import CTnc from '../views/confirm/CTnc';
import MembershipForm from '../views/confirm/MembershipForm';
import Faqs from '../views/faqs';
import Faq from '../views/faqs/Faq';
import FaqLayouts from '../components/FaqLayouts';
import ClubAndFasility from '../views/faqs/ClubAndFasility';
import SafetyHealth from '../views/faqs/SafetyHealth';
import Workouts from '../views/workouts/Workouts';
import WeightLost from '../views/workouts/WeightLost';
import Endurance from '../views/workouts/Endurance';
import ToneMuscle from '../views/workouts/ToneMuscle';
import Flexibility from '../views/workouts/Flexibility';
import Strength from '../views/workouts/Strength';

import Circuit from '../views/workouts/Circuit';
import BodyPump from '../views/workouts/BodyPump';
import BodyCombat from '../views/workouts/BodyCombat';
import VinyasaYoga from '../views/workouts/VinyasaYoga';
import YogaWheel from '../views/workouts/YogaWheel';
import MembershipSelect from '../views/membership/Select';
import FitnessworksApps from '../views/FitnessworksApps';
import ContactUs from '../views/ContactUs';
import PersonalTrainer from '../views/PersonalTrainer';

// function WorkoutsLayout() {
  
// }

function Router(props) {
  return (
    <Routes>
      <Route element={<AppLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="article" element={<Article />} />
        <Route path="shop" element={<Shop />} />
        <Route path="membership-form" element={<MembershipForm />} />
        <Route path="fitnessworks-apps" element={<FitnessworksApps />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="personal-trainer" element={<PersonalTrainer />} />
        <Route path="workouts">
          <Route index element={<Workouts />} />
          <Route path="weight-lost" element={<WeightLost />} />
          <Route path="endurance" element={<Endurance/>} />
          <Route path="tone-muscle" element={<ToneMuscle />} />
          <Route path="flexibility" element={<Flexibility />} />
          <Route path="strength" element={<Strength />} />
          <Route path="circuit" element={<Circuit />} />
          <Route path="bodypump" element={<BodyPump />} />
          <Route path="bodycombat" element={<BodyCombat />} />
          <Route path="vinyasa-yoga" element={<VinyasaYoga />} />
          <Route path="yoga-wheel" element={<YogaWheel />} />
        </Route>
        <Route path="faqs" element={<FaqsLayout />} >
          <Route index element={<Faqs />} />
          <Route element={<FaqLayouts />}>
            <Route path="faq" element={<Faq />} />
            <Route path="club-and-fasility" element={<ClubAndFasility />} />
            <Route path="safety-health" element={<SafetyHealth />} />
          </Route>
        </Route>
        <Route path="membership" >
          <Route index element={<MembershipSelect />} />
        </Route>
      </Route>

      <Route path='tnc' element={<AppLayout />} >
        <Route index element={<Tnc />} />
      </Route>
      
      <Route path="invesment" element={<AppLayoutInves />}>
        <Route index element={<Investment />} />
        <Route path="our-founder" element={<OurFounder />} />
        <Route path="market-strategy" element={<MarketStrategy />} />
        <Route path="presentation" element={<Presentation />} />
      </Route>

      <Route path="confirm" element={<AppLayoutBlank />}>
        <Route index element={<CTnc />} />
      </Route>
      
      <Route path="*" element={<NotFont />} />
    </Routes>
  )
}

export default Router