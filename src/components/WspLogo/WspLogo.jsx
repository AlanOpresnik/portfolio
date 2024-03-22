import React, { useEffect, useState } from 'react'

import './wspLogo.css'
import { Link } from 'react-router-dom'

const WspLogo = () => {
  const [visible, setVisible] = useState('wsp-Logo-container')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setVisible('wsp-Logo-container visible'); // Agregar la clase 'visible' si el desplazamiento es >= 300px
      } else {
        setVisible('wsp-Logo-container'); // Quitar la clase 'visible' si el desplazamiento es < 300px
      }
    };

    // Agregar el evento de escucha de desplazamiento cuando se monta el componente
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento cuando se desmonta el componente para evitar pérdidas de rendimiento
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
 

  return (
    <div className={visible}>
      <Link to={"https://wa.me/+5491123498925"} target='BlANK'><img className='wsp-logo-img' src={"/wspLogo.webp"} alt='Logo de WhatsApp'/></Link>
    </div>
  )
}

export default WspLogo