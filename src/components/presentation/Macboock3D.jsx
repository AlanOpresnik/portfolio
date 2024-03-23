import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import MobileDetect from 'mobile-detect';

export default function App() {
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const md = new MobileDetect(window.navigator.userAgent);
        if (md.mobile()) {
            setIsMobile(true); // Establecer isMobile en true si es un dispositivo móvil
            setLoading(false); // Establecer loading en false para evitar la carga de Spline
        }

    }, []);

    // Función para manejar el evento onLoad
    const handleSplineLoad = () => {
        setLoading(false);
    };

    return (
        <>




            <div className='relative flex justify-center   h-[400px] w-full'>
                <div className='mr-6 relative z-10 w-[200px] h-[430px] '>
                    <img className='mb-4 block   h-full  w-full object-cover md:mt-0 ' src='/3dMobile.avif' />
                </div>
            </div>
        </>
    );
}
