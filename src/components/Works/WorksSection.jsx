import React, { useEffect, useState } from 'react'
import WorksCard from './WorksCard'
import { Chip } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const WorksSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    const [isVisibleTre, setIsVisibleTre] = useState(false);
    const [refTwo, inViewTwo] = useInView();
    const [refTre, inViewTre] = useInView();

    const [ref, inView] = useInView()
    const [isVisibleGif, setIsVisibleGid] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('#worksSection');
            if (section) {
                if (section.getBoundingClientRect().top < window.innerHeight) {
                    setIsVisibleGid(true);
                } else {
                    setIsVisibleGid(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Llamada inicial para establecer la visibilidad al cargar la página

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    useEffect(() => {
        if (inViewTwo) {
            setIsVisibleTwo(true);
        }
    }, [inViewTwo]);
    useEffect(() => {
        if (inViewTre) {
            setIsVisibleTre(true);
        }
    }, [inViewTre]);



    const works = [
        {
            name: "RoblesRender - Portfolio Moderno para un arquitecto",
            description: "Portfolio moderno y con una muy buena experiencia de usuario, en constante comunicacion con el cliente para satisfacer al 100% sus necesidades.",
            image: "/robles.jpeg",
            link: "https://roblesrender.com",
            tech: "Next.js",
            style: "Tailwind CSS"
        },
        {
            name: "Lorecunas, Ecommerce para una fabrica de muebles infantiles",
            description: "Hermoso Ecommerce para poder darse a conocer y atraer mas de 1000 VISITAS semanales, buena experiencia de usuario y con mucha facilidad en s panel de administracion.",
            image: "/lorecunas.jpg",
            link: "https://lorecunas.com.ar",
            tech: "Vite",
            style: "Tailwind CSS"
        }
    ]
    return (
        <section className='mt-0 md:mt-12 relative'>
            <div className='absolute w-[40px] h-full hidden md:block md:top-[-60px] left-1/2 right-1/2 z-40 transition-all' style={{ opacity: isVisibleGif ? 0 : 1 }}>
                <img className='w-[60px] animate-bounce z-40 h-[40px]' src='/scroll.avif' alt="scroll" /> {/* Asegúrate de proporcionar un texto alternativo para la accesibilidad */}
            </div>
            <div className='flex items-center'>

                <svg class="size-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>
                <h4 className='text-4xl font-bold '>Mis trabajos</h4>
            </div>
            <div id='worksSection' className='mt-6  w-full'>



                <Link to="https://roblesrender.com">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 70 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: .5 }}
                        className='flex flex-col md:flex-row gap-0 mb-12 md:gap-6 hover:scale-95 transition-transform duration-300 max-w-[900px]  pb-12 md:pb-6'
                    >                      <div className='h-[270px] max-w-[960px] ronded'>
                            <img className='h-[250px] w-[480px] md:max-w-[400px] rounded-xl' src={"/robles.jpeg"} alt={"roblesrender.com imagen"} />
                        </div>
                        <div className=''>
                            <h4 className='text-[1.7rem] text-white font-bold'>{"RoblesRender"}</h4>
                            <div className='flex gap-2 mb-3'>
                                <Chip size='small' className='text-xs' label={"Next.js"} sx={{ backgroundColor: "#000", color: "white" }} variant="filled" />
                                <Chip size='small' className='text-xs' label={"Tailwind CSS"} sx={{ backgroundColor: "#003159", color: "white" }} variant="filled" />
                            </div>
                            <p>Portfolio moderno y con una muy buena experiencia de usuario, en constante comunicacion con el cliente para satisfacer al 100% sus necesidades.</p>
                            <footer class="flex items-end justify-start mt-4 gap-x-4">
                                <Link to="https://roblesrender.com" role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                    Preview
                                </Link>
                            </footer>
                        </div>
                    </motion.div>
                </Link>
            </div>
            <Link to="https://portaflex.com.ar">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: 70 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: .5 }}
                    className='flex flex-col md:flex-row gap-0 mb-12 md:gap-6 hover:scale-95 transition-transform duration-300 max-w-[900px]  pb-12 md:pb-6'
                >                      <div className='h-[270px] max-w-[960px] ronded'>
                        <img className='h-[250px] w-[480px] md:max-w-[400px] rounded-xl' src={"/portaflex.jpeg"} alt={"portaflex.com.ar imagen"} />
                    </div>
                    <div className=''>
                        <h4 className='text-[1.7rem] text-white font-bold'>{"PortaFlex - Ecommerce"}</h4>
                        <div className='flex gap-2 mb-3'>
                            <Chip size='small' className='text-xs' label={"Next.js"} sx={{ backgroundColor: "#000", color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Tailwind CSS"} sx={{ backgroundColor: "#003159", color: "white" }} variant="filled" />
                        </div>
                        <p>Ecommerce en el que trabaje  implementando pasarela de pagos con mercado pago y tarjeta de credito para Transferencias bancarias, tambien implemente un sistema de cupones para hacer descuentos de una cantidad determinada en el panel de adminsitracion, implemente un sistema de envios x codigo postal que suma el valor del envio a tu zona dependiendo tu codigo postal</p>
                        <footer class="flex items-end justify-start mt-4 gap-x-4">
                            <Link to="https://portaflex.com.ar" role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                Preview
                            </Link>
                        </footer>
                    </div>
                </motion.div>
            </Link>
            <Link to="https://lorecunas.com.ar">
                <motion.div
                    ref={refTwo}
                    initial={{ opacity: 0, x: -70 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: .5 }}
                    className='flex flex-col md:flex-row gap-0 mb-12 md:gap-6 hover:scale-95 w-full transition-transform duration-300 max-w-[900px]  pb-12 md:pb-6'
                >                     <div className='h-[270px] flex justify-center ronded '>
                        <img className='h-[250px] w-[480px] md:max-w-[400px] rounded-xl  ' src={"/lorecunas.jpg"} alt={"lorecunas.com.ar imagen"} />
                    </div>
                    <div className=''>
                        <h4 className='text-[1.7rem] text-white font-bold'>{"LoreCunas"}</h4>
                        <div className='flex flex-wrap gap-2 mb-3'>
                            <Chip size='small' className='text-xs vite' label={"Vite + React"} sx={{ color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Tailwind CSS"} sx={{ backgroundColor: "#003159", color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Node js"} sx={{ backgroundColor: "#1c631c", color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Mongo DB"} sx={{ backgroundColor: "#1c631c", color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Expressjs"} sx={{ backgroundColor: "#1c631c", color: "white" }} variant="filled" />
                        </div>
                        <p>Hermoso Ecommerce para poder darse a conocer y atraer mas de 1000 VISITAS semanales, buena experiencia de usuario y con mucha facilidad en su panel de administracion.</p>
                        <footer class="flex items-end justify-start mt-4 gap-x-4">
                            <Link to="https://lorecunas.com.ar" role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                Preview
                            </Link>
                        </footer>
                    </div>
                </motion.div>
            </Link>
            <Link to="https://tuparaisofederacion.com">
                <motion.div
                    ref={refTre}
                    initial={{ opacity: 0, x: -70 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: .5 }}
                    className='flex -2 flex-col md:flex-row gap-0 mb-0 md:gap-6 hover:scale-95 w-full transition-transform duration-300 max-w-[900px]  pb-12 md:pb-6'
                >                     <div className='h-[270px] flex justify-center ronded '>
                        <img className='h-[250px] w-[480px] md:max-w-[400px] rounded-xl  ' src={"/tuparaiso.jpeg"} alt={"tuparaiso.com imagen"} />
                    </div>
                    <div className=''>
                        <h4 className='text-[1.7rem] text-white font-bold'>{"Tu Paraiso - Casa alojamiento"}</h4>
                        <div className='flex flex-wrap gap-2 mb-3'>
                            <Chip size='small' className='text-xs vite' label={"Vite + React"} sx={{ color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Tailwind CSS"} sx={{ backgroundColor: "#003159", color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Node js"} sx={{ backgroundColor: "#1c631c", color: "white" }} variant="filled" />

                        </div>
                        <p>Pagina web para una casa - alojamiento, con un SEO impecable y un rendimiento del 98%, siempre en contacto con el clienete para darle el diseño que mas le guste, </p>
                        <footer class="flex items-end justify-start mt-4 gap-x-4">
                            <Link to="https://tuparaisofederacion.com" role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                Preview
                            </Link>
                        </footer>
                    </div>
                </motion.div>
            </Link>
        </section>

    )
}

//    {works.map((work => (
//       <WorksCard name={work.name} description={work.description} image={work.image} link={work.link} tech={work.tech} style={work.style} />
// )))}
export default WorksSection