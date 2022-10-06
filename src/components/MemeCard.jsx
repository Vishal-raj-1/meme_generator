import React from 'react'
import { useNavigate } from 'react-router-dom'

const MemeCard = ({meme}) => {
    const navigate = useNavigate();

    return (
        <div className='w-[300px] lg:w-[450px] bg-card border-2 border-cardborder rounded shadow-2xl m-2 p-2 text-center'>
            <img src={meme.url} className=''/>
            <p className='text-2xl font-bold font-helvetica pt-2 text-primary'>{meme.name}</p>
            <button className='rounded-md bg-indigo-600 py-1 my-2 px-4 font-semibold text-white hover:bg-indigo-500' onClick={() => navigate(`/edit?url=${meme.url}`)}>Edit</button>
        </div>
    )
}

export default MemeCard