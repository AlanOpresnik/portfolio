import React from 'react'
import SobreMiCard from './SobreMiCard'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
const SobreMiSection = () => {
    return (
        <div className='mt-12 mb-12'>
            <div className='flex gap-1 items-center mb-4'>
                <EmojiPeopleIcon className='min-w-[48px]' sx={{width: "48px", height:"48px"}} />
                <h4 className='text-3xl font-bold '>Un poco mas sobre mi</h4>

            </div>
            <SobreMiCard />
        </div>
    )
}

export default SobreMiSection