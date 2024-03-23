import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Macboook3D from './Macboock3D'
import Carousel from '../autoPlayCarousel/Carousel'

const PresentationCard = () => {
    return (
        <header className='flex flex-col sm:flex-row'>
            <div>
                <div className='mb-6 flex items-center gap-6'>
                    <Avatar sx={{ width: 66, height: 66 }}><img src='/foto.jpg' /></Avatar>
                    <Link>
                        <div className='flex items-center'>
                            <span className='relative inline-flex overflow-hidden rounded-full p-[1px]'>
                                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]'></span>
                                <div className='inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap'>
                                    Disponible para trabajar
                                </div>
                            </span>
                        </div>

                    </Link>
                </div>
                <div className='max-w-[600px]'>
                    <h1 className='text-4xl font-bold text-white'>Hola, soy Alan Opresnik</h1>
                    <p className='text-xl'>+2 años de experiencia. <span className='text-yellow-200 font-semibold'>Software developer y UX/UI Designer</span>, de Argentina, Buenos Aires, especializado en el desarrollo de aplicaciones web unicas</p>
                </div>
                <nav className='flex gap-3 mt-4'>
                    <a href="mailto:alanopk328@gmail.com" target="_blank"  role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1  transition  border  rounded-full bg-[#111827] border-gray-600 text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">  <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>
                        Contáctame
                    </a>
                    <a href="https://www.instagram.com/alan_opk/" target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1  transition  rounded-full bg-[#111827] border-gray-600 text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">
                        <svg className='size-4 text-white fill-white font-bold' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                        </svg>
                        instagram
                    </a>
                </nav>

            </div>
            <div className='items-center justify-center  w-auto md:w-[500px] flex mt-0 md:mt-[-20px] ml-0 md:ml-12  '>
                <Macboook3D />
            </div>

        </header>
    )
}

export default PresentationCard