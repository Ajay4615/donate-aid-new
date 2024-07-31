import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Services";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import BlogPage from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Shop from "./pages/Shop";
import CharitySupport from "./components/services-descripion/CharitySupport.jsx";
import FoodWaterCharity from "./components/services-descripion/FoodWaterCharity.jsx";
import FundAssistance from "./components/services-descripion/FundAssistance.jsx";
import GiftsForChildren from "./components/services-descripion/GiftsForChildren.jsx";
import VolunteerOpportunities from "./components/services-descripion/VolunteerOpportunities.jsx";
import VolunteerRegistration from "./pages/VolunteerRegister.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/services" element={<Service />} />
        <Route path="/pages/shop" element={<Shop />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/event" element={<Events />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route path="/charity-support" element={<CharitySupport />} />
        <Route path="/food-water-charity" element={<FoodWaterCharity />} />
        <Route
          path="/volunteer-opportunities"
          element={<VolunteerOpportunities />}
        />
        <Route path="/gifts-for-children" element={<GiftsForChildren />} />
        <Route path="/fund-assistance" element={<FundAssistance />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route exact path="*" element={<Navigate to="/" />} />
        <Route exact path="/vregstration" element={<VolunteerRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}
