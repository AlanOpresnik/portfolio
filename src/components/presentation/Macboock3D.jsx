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
            <span className={`loader flex justify-center items-center ${loading === true ? "" : "hidden"}`}></span>

            {!isMobile && (
                <Spline
                    className='mb-4 hidden md:block mt-12 mr-6 h-[380px] md:h-[480px] md:w-[400px] md:mt-0 '
                    scene="https://prod.spline.design/7BPVyxmY8Hx-9pHZ/scene.splinecode"
                    onLoad={handleSplineLoad}
                    onAbort={handleSplineLoad}
                />
            )}

            <div className='relative flex justify-center  md:hidden h-[400px] w-full'>
                <div className='mr-6 relative z-10 w-full'>
                    <img className='mb-4 block md:hidden absolute top-[-120px]  h-[730px]  w-full object-cover md:mt-0 ' src='/3dMobile.avif' />
                </div>
            </div>
        </>
    );
}
