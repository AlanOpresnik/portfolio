import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Presentation from './components/presentation/PresentationSection.jsx';
import WorksSection from './components/Works/WorksSection.jsx';
import Carousel from './components/autoPlayCarousel/Carousel.jsx';
import PersonalProyects from './components/personal/PersonalProyects.jsx';
import SobreMiSection from './components/sobreMi/SobreMiSection.jsx';
import ContactSection from './components/Contact/ContactSection.jsx';
import Footer from './components/footer/Footer.jsx';
import { Helmet } from 'react-helmet';
import { Toaster } from 'react-hot-toast';

import WspLogo from './components/WspLogo/WspLogo.jsx';
function App() {


  return (
    <>
      <Toaster position='top-right'/>
      <div id='inicio' className='max-w-[1080px]  p-4 sm:p-2 flex flex-col  mx-auto'>
        <Presentation />
        <div id='trabajos' className='mt-40 overflow-x-hidden'>
          <WorksSection />
        </div>
        <div id='conocimientos' className='relative h-[290px] flex items-center gap-1'>
          <svg class="size-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>
          <h4 className='text-3xl font-bold'>Conocimientos</h4>
          <Carousel />
        </div>
        <div id='proyectos' className='mt-32 overflow-x-hidden'>
          <div className='flex items-center gap-1'>

            <svg class="size-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>
            <h4 className='text-3xl font-bold'>Proyectos Personales</h4>
          </div>
          <PersonalProyects />
        </div>
        <div id='sobre-mi'>
          <SobreMiSection />
        </div>
        <div id='contact'>
          <ContactSection />
        </div>
        <WspLogo/>
      </div>
    </>
  )
}

export default App
