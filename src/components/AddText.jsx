import React, { useState } from 'react'
import Draggable from 'react-draggable'
const AddText = () => {
    const [editMode, setEditMode] = useState(true);
    const [text, setText] = useState('');

    console.log(text);
    return (
        <Draggable>
            {
                editMode
                    ?
                    <>
                        <textarea value={text} onChange={(e) => setText(e.target.value)} className='py-2 pl-3 font-bold my-2 text-primary w-100' onDoubleClick={() => setEditMode(false)} />
                        <button onClick={() => setEditMode(false)} className='rounded-md bg-indigo-600 py-1 my-5 px-4 font-semibold text-white hover:bg-indigo-500 md:hidden'>Save Text</button>
                    </>
                    : <p className='text-3xl font-bold font-helvetica text-primary' onDoubleClick={() => setEditMode(true)}>{text}</p>
            }
        </Draggable>
    )
}

export default AddText