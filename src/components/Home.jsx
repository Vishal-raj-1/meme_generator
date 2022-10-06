import React, { useState, useEffect } from 'react'
import MemeCard from './MemeCard';
import { getAllMemes } from '../api';

const Home = () => {
    const [memes, setMemes] = useState([]);
    useEffect(() => {
        getAllMemes().then((memes) => setMemes(memes.data.memes));
    }, []);


    return (
        <div className='my-4 flex flex-wrap justify-evenly items-center content-center'>
            {
                memes.map(meme => <MemeCard meme={meme} key={meme.url} />)
            }
        </div>
    )
}

export default Home