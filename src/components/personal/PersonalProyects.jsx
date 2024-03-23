import React, { useEffect, useState } from 'react'
import { Chip } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const PersonalProyects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    const [isVisibleTre, setIsVisibleTre] = useState(false);
    const [refTwo, inViewTwo] = useInView();
    const [refTre, inViewTre] = useInView();

    const [ref, inView] = useInView()
    const [isVisibleGif, setIsVisibleGid] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('#PersonalProyects');
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



    return (
        <div className='mt-0 md:mt-12 relative'>
            <Link to="https://pokeapi-next-js.vercel.app/">
                <div id='PersonalProyects' className='mt-6  w-full'>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: 70 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1 }}
                        className='flex flex-col md:flex-row gap-0  md:gap-6 hover:scale-95 transition-transform duration-300 max-w-[900px]  pb-12 md:pb-6'
                    >                      <div className='h-[270px] max-w-[960px] ronded'>
                            <img className='h-[250px] w-[480px] md:max-w-[400px] rounded-xl' src={"/peronal1.avif"} alt={"pokemons.com imagen"} />
                        </div>
                        <div className=''>
                            <h4 className='text-[1.7rem] text-white font-bold'>{"Poke Api - Next.js static Paths"}</h4>
                            <div className='flex gap-2 mb-3'>
                                <Chip size='small' className='text-xs' label={"Next.js"} sx={{ backgroundColor: "#000", color: "white" }} variant="filled" />
                                <Chip size='small' className='text-xs' label={"Tailwind CSS"} sx={{ backgroundColor: "#003159", color: "white" }} variant="filled" />
                            </div>
                            <p>Poke api desarrollada con Next.js y su funcion de get static paths para un mayor rendimineto en el cliente, con agregar favoritos, efectos y mas</p>
                            <footer class="flex items-end justify-start mt-4 gap-x-4">
                                <Link to="https://pokeapi-next-js.vercel.app/" role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                    Preview
                                </Link>
                            </footer>
                        </div>
                    </motion.div>
                </div>
            </Link>
            <Link to="https://movies-app-nine-jet.vercel.app/">
                <motion.div
                    ref={refTre}
                    initial={{ opacity: 0, x: -70 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='flex -2 flex-col md:flex-row gap-0 mb-0 md:gap-6 hover:scale-95 w-full transition-transform duration-300 max-w-[900px]  pb-12 md:pb-6'
                >                     <div className='h-[270px] flex justify-center ronded '>
                        <img className='h-[250px] w-[480px] md:max-w-[400px] rounded-xl  ' src={"/personal4.avif"} alt={"tuparaiso.com imagen"} />
                    </div>
                    <div className=''>
                        <h4 className='text-[1.7rem] text-white font-bold'>{`Movies app - based on Netflix`}</h4>
                        <div className='flex flex-wrap gap-2 mb-3'>
                            <Chip size='small' className='text-xs ' label={"Next.js"} sx={{backgroundColor:"black", color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Tailwind CSS"} sx={{ backgroundColor: "#003159", color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Node js"} sx={{ backgroundColor: "#1c631c", color: "white" }} variant="filled" />

                        </div>
                        <p>Pagina para ver trailer de peliculas e informarte de tus peliculas favoritas, en esta pagina yo realice toda la interfaz de usuario   y la conexion a la api de TMDB </p>
                        <footer class="flex items-end justify-start mt-4 gap-x-4">
                            <Link to="https://movies-app-nine-jet.vercel.app/" role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                Preview
                            </Link>
                        </footer>
                    </div>
                </motion.div>
            </Link>
            <Link to="https://app-clima-lyart.vercel.app/">
                <motion.div
                    ref={refTwo}
                    initial={{ opacity: 0, x: -70 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='flex flex-col md:flex-row gap-0 mb-12 md:gap-6 hover:scale-95 w-full transition-transform duration-300 max-w-[900px]  pb-12 md:pb-6'
                >                     <div className='h-[270px] flex justify-center ronded '>
                        <img className='h-[250px] w-[480px] md:max-w-[400px] rounded-xl  ' src={"/personal2.jpeg"} alt={"clima imagen"} />
                    </div>
                    <div className=''>
                        <h4 className='text-[1.7rem] text-white font-bold'>{"App Clima - API Weather"}</h4>
                        <div className='flex flex-wrap gap-2 mb-3'>
                            <Chip size='small' className='text-xs vite' label={"Vite + React"} sx={{ color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Tailwind CSS"} sx={{ backgroundColor: "#003159", color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Node js"} sx={{ backgroundColor: "#1c631c", color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Mongo DB"} sx={{ backgroundColor: "#1c631c", color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Expressjs"} sx={{ backgroundColor: "#1c631c", color: "white" }} variant="filled" />
                        </div>
                        <p>Aplicacion de practicas para consultar API'S , en este caso una API que nos retorna el clima de la zona a la que hayamos pedido</p>
                        <footer class="flex items-end justify-start mt-4 gap-x-4">
                            <Link to="https://app-clima-lyart.vercel.app/" role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                Preview
                            </Link>
                        </footer>
                    </div>
                </motion.div>
            </Link>
            <Link to="https://boisterous-nasturtium-0e1452.netlify.app/">
                <motion.div
                    ref={refTre}
                    initial={{ opacity: 0, x: -70 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='flex -2 flex-col md:flex-row gap-0 mb-0 md:gap-6 hover:scale-95 w-full transition-transform duration-300 max-w-[900px]  pb-12 md:pb-6'
                >                     <div className='h-[270px] flex justify-center ronded '>
                        <img className='h-[250px] w-[480px] md:max-w-[400px] rounded-xl  ' src={"/personal3.jpeg"} alt={"tuparaiso.com imagen"} />
                    </div>
                    <div className=''>
                        <h4 className='text-[1.7rem] text-white font-bold'>{"CRM de practica para una veterinaria"}</h4>
                        <div className='flex flex-wrap gap-2 mb-3'>
                            <Chip size='small' className='text-xs vite' label={"Vite + React"} sx={{ color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Tailwind CSS"} sx={{ backgroundColor: "#003159", color: "white" }} variant="filled" />
                            <Chip size='small' className='text-xs' label={"Node js"} sx={{ backgroundColor: "#1c631c", color: "white" }} variant="filled" />

                        </div>
                        <p>CRM de veterinaria donde podes agregar un paciente ,editarlo,darlo de alta etc, hermosa ui. </p>
                        <footer class="flex items-end justify-start mt-4 gap-x-4">
                            <Link to="https://tuparaisofederacion.com" role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                Preview
                            </Link>
                        </footer>
                    </div>
                </motion.div>
            </Link>

        </div>

    )
}

//    {works.map((work => (
//       <WorksCard name={work.name} description={work.description} image={work.image} link={work.link} tech={work.tech} style={work.style} />
// )))}
export default PersonalProyects