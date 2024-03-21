import { Chip } from '@mui/material'
import React from 'react'

const WorksCard = ({ name, description, image, link, tech,style }) => {
    return (
        <div className='flex gap-6 w-[900px]'>
            <div className='h-[270px] w-[700px] ronded'>
                <img className='h-[250px] max-w-[400px] rounded-xl' src={image} alt={name} />
            </div>
            <div className=''>
                <h4 className='text-[1.7rem] text-white font-bold'>{name}</h4>
            <div className='flex gap-2 mb-3'>
            <Chip size='small' className='text-xs' label={tech} sx={{backgroundColor: "#000", color: "white"}} variant="filled" />
            <Chip size='small' className='text-xs' label={style} sx={{backgroundColor: "#003159", color: "white"}} variant="filled" />
            </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default WorksCard