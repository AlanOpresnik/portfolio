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


            {!isMobile && (
                <img
                    className='mb-4 hidden md:block mt-12 mr-6 h-[480px] md:h-[400px] md:w-[600px] md:mt-0 '
                    src='/ilsutracionhabitacion.png'
                />
            )}

            <div className='relative flex justify-center  md:hidden h-[400px] w-full'>
                <div className='mr-6 relative z-10 w-full'>
                    <img className=' block md:hidden mt-12     w-full object-cover md:mt-0 ' src='/ilsutracionhabitacion.png' />
                </div>
            </div>
        </>
    );
}
