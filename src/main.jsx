import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import Navbar from './components/Navbar/Navbar.jsx';
import '@fontsource-variable/onest';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Presentation from './components/presentation/PresentationSection.jsx';
import WorksSection from './components/Works/WorksSection.jsx';
import Carousel from './components/autoPlayCarousel/Carousel.jsx';
import PersonalProyects from './components/personal/PersonalProyects.jsx';
import SobreMiSection from './components/sobreMi/SobreMiSection.jsx';
import ContactSection from './components/Contact/ContactSection.jsx';
import Footer from './components/footer/Footer.jsx';
import { Helmet } from 'react-helmet';


ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Presentation />} />
        <Route path="/trabajos" element={<WorksSection />} />
        <Route path="/conocimientos" element={<Carousel />} />
        <Route path="/proyectos" element={<PersonalProyects />} />
        <Route path="/sobre-mi" element={<SobreMiSection />} />
        <Route path="/contacto" element={<ContactSection />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,
  document.getElementById('root')
);
