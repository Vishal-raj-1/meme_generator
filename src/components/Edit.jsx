import React, { useState, createRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import AddText from './AddText';
import { exportComponentAsJPEG } from 'react-component-export-image';

const Edit = () => {
  const [params] = useSearchParams();
  const [textCount, setTextCount] = useState(0);
  const memeRef = createRef();

  return (
    <div className='w-[300px] lg:w-[450px] bg-card border-2 border-cardborder rounded shadow-2xl m-2 p-2 text-center mx-auto mt-5'>
      <div ref={memeRef}>
        <img src={params.get('url')} className='' />
        {
          Array(textCount).fill(0).map(() => <AddText />)
        }
      </div>
      <button className='rounded-md bg-indigo-600 py-1 my-5 px-4 font-semibold text-white hover:bg-indigo-500' onClick={() => setTextCount(textCount + 1)}>Add New Text</button>
      <button className='rounded-md bg-indigo-600 py-1 my-5 mx-4 px-4 font-semibold text-white hover:bg-indigo-500' onClick={() => exportComponentAsJPEG(memeRef)}>Save</button>

      <p className='text-xl font-bold font-helvetica pt-2 text-primary'>Double click on Text & Drag to Place it</p>
    </div>
  )
}

export default Edit